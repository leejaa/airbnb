import {
    Resolver,
    Query,
    Mutation,
    Arg,
    ObjectType,
    Field,
    Ctx,
    UseMiddleware,
    Int
  } from "type-graphql";
  import { hash, compare } from "bcryptjs";
  import axios from "axios";
  import { User } from "../entity/User";
  import { MyContext } from "../auth/MyContext";
  import { createRefreshToken, createAccessToken } from "../auth/auth";
  import { isAuth } from "../auth/isAuth";
  import { sendRefreshToken } from "../auth/sendRefreshToken";
  import { getConnection } from "typeorm";
  import { verify } from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";
  
  @ObjectType()
  class LoginResponse {
    @Field()
    accessToken: string;
    @Field(() => User)
    user: User;
  }
  
  @Resolver()
  export class UserResolver {
    @Query(() => String)
    hello() {
      return "hi!";
    }
  
    @Query(() => String)
    @UseMiddleware(isAuth)
    bye(@Ctx() { payload }: MyContext) {
      console.log(payload);
      return `your user id is: ${payload!.userId}`;
    }
  
    @Query(() => [User])
    users() {
      return User.find();
    }
  
    @Query(() => User, { nullable: true })
    me(@Ctx() context: MyContext) {
      const authorization = context.req.headers["authorization"];
  
      if (!authorization) {
        return null;
      }
  
      try {
        const token = authorization.split(" ")[1];
        const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
        return User.findOne(payload.userId);
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  
    @Mutation(() => Boolean)
    async logout(@Ctx() { res }: MyContext) {
      sendRefreshToken(res, "");
  
      return true;
    }
  
    @Mutation(() => Boolean)
    async revokeRefreshTokensForUser(@Arg("userId", () => Int) userId: number) {
      await getConnection()
        .getRepository(User)
        .increment({ id: userId }, "tokenVersion", 1);
  
      return true;
    }
  
    @Mutation(() => LoginResponse)
    async login(
      @Arg("email") email: string,
      @Arg("password") password: string,
      @Ctx() { res }: MyContext
    ): Promise<LoginResponse> {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        throw new Error("could not find user");
      }
  
      const valid = await compare(password, user.password);
  
      if (!valid) {
        throw new Error("bad password");
      }
  
      // login successful
  
      sendRefreshToken(res, createRefreshToken(user));
  
      return {
        accessToken: createAccessToken(user),
        user
      };
    }
  
    @Mutation(() => Boolean)
    async register(
      @Arg("email") email: string,
      @Arg("password") password: string
    ) {
      const hashedPassword = await hash(password, 12);
      const email_secret = `${ Math.floor(Math.random() * 1000) }`;
  
      try {
        await User.insert({
          email,
          password: hashedPassword,
          email_secret
        });
        sendEmail( 'jahun135@hanmail.net', email, email_secret );
      } catch (err) {
        console.log(err);
        return false;
      }
  
      return true;
    }

    @Mutation(() => Boolean)
    async push(
    ) {
      const message = { text: "회원가입이 완료되었습니다.", number: "+821034414148" };
      try {
        const response = await axios({
          url: "https://azw4tjufpa.execute-api.ap-northeast-2.amazonaws.com/pushNotification/push",
          method: "get",
          data: JSON.stringify(message),
        });
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
        return false;
      }
      return true;
    }
  }