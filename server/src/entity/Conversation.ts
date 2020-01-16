import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToMany } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User } from "./User";

@ObjectType()
@Entity()
export class Conversation extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => GraphQLJSON)
  @ManyToMany( () => User , user => user.id, { 
    cascade : true 
  })
  participants : User[];

}