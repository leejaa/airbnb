import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import GraphQLJSON from "graphql-type-json";
import { Room } from "./Room";

@ObjectType()
@Entity()
export class Review extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'text' })
  review: string;

  @Field(() => Int)
  @Column({ type: 'integer' })
  accuracy: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  communication: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  cleanliness: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  location: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  check_in: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  value: Number;

  @Field( () => GraphQLJSON )
  @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User;

  @Field( () => GraphQLJSON )
  @OneToOne(() => Room, { cascade: true })
    @JoinColumn()
    room: Room;
}