import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { createServer } from 'http';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection, getConnection } from "typeorm";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import cors from "cors";
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { User } from "./entity/User";
import { sendRefreshToken } from "./auth/sendRefreshToken";
import { createAccessToken, createRefreshToken } from "./auth/auth";
import { RoomResolver } from "./resolvers/RoomResolver";
import { RecipeResolver } from "./resolvers/RecipeResolver";
import { SendResolver } from "./resolvers/SendResolver";

(async () => {
  const app = express();
  app.use(
    cors({
      origin: [
        `${process.env.FRONT_URL}`,
        `${process.env.FRONT_DEV_URL}`,
        `${process.env.FRONT_DEV_APP_URL}`,
      ],
      credentials: true
    })
  );
  app.use(cookieParser());
  app.get("/", (_req, res) => res.send("hello"));
  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "" });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: "" });
    }

    // token is valid and
    // we can send back an access token
    const user = await User.findOne({ id: payload.userId });

    if (!user) {
      return res.send({ ok: false, accessToken: "" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: "" });
    }

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  await createConnection();
  // await getConnection().synchronize(true);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, RoomResolver, RecipeResolver, SendResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
    introspection: true,
    playground: true,
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const httpServer = createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen(process.env.PORT || 4000, () => {
    console.log("express server started");
  });
})();