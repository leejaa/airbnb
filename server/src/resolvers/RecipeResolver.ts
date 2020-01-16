import { Query, Resolver, Arg, Mutation, PubSub, Publisher, Subscription, Root, ID } from "type-graphql";

import { Recipe, sampleRecipes } from "../entity/Recipe";
import { CommentInput, Comment, NewCommentPayload } from "../entity/Comment";

enum Topic {
    NewComment = "NEW_COMMENT",
    NewRecipe = "NEW_RECIPE",
}

@Resolver()
export class RecipeResolver {
  private readonly recipes: Recipe[] = sampleRecipes.slice();

  @Query(() => Recipe, { nullable: true })
  async recipe(@Arg("id", () => ID) id: string) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  @Mutation(() => Boolean)
  async addNewComment(
    @Arg("comment") input: CommentInput,
    @PubSub(Topic.NewComment) notifyAboutNewComment: Publisher<NewCommentPayload>,
  ): Promise<boolean> {
    const recipe = this.recipes.find(r => r.id === input.recipeId);
    if (!recipe) {
      return false;
    }
    const comment: Comment = {
      content: input.content,
      nickname: input.nickname,
      date: new Date(),
    };
    recipe.comments.push(comment);
    await notifyAboutNewComment({
      content: comment.content,
      nickname: comment.nickname,
      dateString: comment.date.toISOString(),
      recipeId: input.recipeId,
    });
    return true;
  }

  @Subscription(() => Comment, {
    topics: Topic.NewComment,
    filter: () => {
      return true;
    },
  })
  newComments(
    @Root() newComment: NewCommentPayload,
  ): Comment {
    return {
      content: newComment.content,
      date: new Date(newComment.dateString), // limitation of Redis payload serialization
      nickname: newComment.nickname,
    };
  }
}