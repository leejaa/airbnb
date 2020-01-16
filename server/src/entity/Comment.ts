import { Field, ObjectType, InputType, ID } from "type-graphql";

@ObjectType()
export class Comment {
  @Field({ nullable: true })
  nickname?: string;

  @Field()
  content: string;

  @Field()
  date: Date;
}

@InputType()
export class CommentInput implements Partial<Comment> {
  @Field(() => ID)
  recipeId: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  content: string;
}

export interface NewCommentPayload {
    recipeId: string;
    dateString: string; // limitation of Redis payload serialization
    content: string;
    nickname?: string;
  }