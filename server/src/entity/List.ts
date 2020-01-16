import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn, ManyToMany } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import GraphQLJSON from "graphql-type-json";
import { Room } from "./Room";

@ObjectType()
@Entity()
export class List extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field( () => GraphQLJSON )
  @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User;

  @Field(() => GraphQLJSON)
  @ManyToMany( () => Room , room => room.id, { 
    cascade : true 
  })
  rooms : User[];
}