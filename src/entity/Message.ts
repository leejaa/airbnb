import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import { Conversation } from "./Conversation";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'text' })
  message: string;

  @Field()
  @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User;

  @Field()
  @OneToOne(() => Conversation, { cascade: true })
    @JoinColumn()
    conversation: Conversation;

}