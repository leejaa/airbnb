import { Query, Resolver, Arg, Mutation, PubSub, Publisher, Subscription, Root, ID } from "type-graphql";

import { Recipe, sampleRecipes } from "../entity/Recipe";
import GraphQLJSON from "graphql-type-json";
import { NewEmailPayload } from "../entity/Email";
import { sendAuthEmail } from "../utils/sendEmail";
import { User } from "../entity/User";
import { createRefreshToken } from "../auth/auth";

enum Topic {
    NewComment = "NEW_COMMENT",
    NewRecipe = "NEW_RECIPE",
    NewEmail = "NEW_EMAIL",
}

@Resolver()
export class SendResolver {
  private readonly recipes: Recipe[] = sampleRecipes.slice();

  @Query(() => Recipe, { nullable: true })
  async recipe(@Arg("id", () => ID) id: string) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  @Mutation(() => Boolean)
  async requestAuthEmail(
    @Arg("email") email: string,
    @Arg("message") message: string,
    @PubSub(Topic.NewEmail) notifyNewEmail: Publisher<NewEmailPayload>,
  ): Promise<boolean> {
    // const newEmail = { email, message };
    console.log('requestAuthEmail enter...');
    try {
      // redis.rpush("emailList", `${JSON.stringify(newEmail)}`);
      await notifyNewEmail({
        email: `${email}`,
        message: `${message}`
      });
      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }

  @Subscription(() => GraphQLJSON, {
    topics: Topic.NewEmail,
    filter: () => {
      return true;
    },
  })
  newEmail(
    @Root() newEmail: NewEmailPayload,
  ){
    console.log('newEmail', newEmail);
    return {
      email: newEmail.email,
      message: newEmail.message,
    };
  }

  @Mutation(() => Boolean)
  async sendAuthEmail(
    @Arg("email") to : string
  ){
    try {
      const user : any = await User.findOne({
        where: {
          email: to
        }
      });
      const refreshToken = createRefreshToken(user);
      sendAuthEmail(to, refreshToken);
      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }
}