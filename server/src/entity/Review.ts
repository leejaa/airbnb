import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
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
  @Column({ type: 'text', nullable: true, default: '' })
  review: string;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true, default: 0 })
  accuracy: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true, default: 0 })
  communication: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true, default: 0 })
  cleanliness: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true, default: 0 })
  location: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true, default: 0 })
  check_in: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true, default: 0 })
  value: Number;

  @Column()
  roomId: number;
  
  @Field(() => Room)
  @ManyToOne(() => Room, room => room.reviews, { nullable: true })
  @JoinColumn({ name: "roomId" })
  room: Promise<Room>;
}