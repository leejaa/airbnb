import { Field, ObjectType, InputType, ID } from "type-graphql";

@ObjectType()
export class Email {
  @Field({ nullable: true })
  nickname?: string;

  @Field()
  content: string;

  @Field()
  date: Date;
}

@InputType()
export class EmailInput implements Partial<Email> {
  @Field(() => ID)
  recipeId: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  content: string;
}

export interface NewEmailPayload {
  email: string,
  message: string,
}