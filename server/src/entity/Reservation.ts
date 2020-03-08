import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User } from "./User";
import { Room } from "./Room";

@ObjectType()
@Entity()
export class Reservation extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'date', nullable: true })
  check_in: Date;

  @Field(() => String)
  @Column({ type: 'date', nullable: true })
  check_out: Date;

  @Column()
  guestId: number;

  @Column()
  roomId: number;

  @Field(() => User)
  @ManyToOne(() => User, user => user.likeRooms, { nullable: true })
  @JoinColumn({ name: "guestId" })
  guest: Promise<User>;

  @Field(() => Room)
  @ManyToOne(() => Room, room => room.reservation, { nullable: true })
  @JoinColumn({ name: "roomId" })
  room: Promise<Room>;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: true })
  in_progress: Boolean;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: true })
  is_finished: Boolean;
}