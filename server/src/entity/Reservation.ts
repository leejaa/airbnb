import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn } from "typeorm";
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

  @Field(() => Int)
  @Column({ type: 'timestamp' })
  check_in: Number;

  @Field(() => Int)
  @Column({ type: 'timestamp' })
  check_out: Number;

  @Field( () => GraphQLJSON )
  @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    guest: User;

  @Field( () => GraphQLJSON )
  @OneToOne(() => Room, { cascade: true })
  @JoinColumn()
  room: Room;

  @Field(() => Boolean)
  @Column({ type: 'boolean' })
  in_progress: Boolean;

  @Field(() => Boolean)
  @Column({ type: 'boolean' })
  is_finished: Boolean;
}