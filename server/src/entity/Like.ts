import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";
import { Room } from "./Room";
import { User } from "./User";

@ObjectType()
@Entity()
export class Like extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    roomId: number;

    @Field(() => User)
    @ManyToOne(() => User, user => user.likeRooms, { nullable: true })
    @JoinColumn({ name: "userId" })
    user: Promise<User>;
  
    @Field(() => Room)
    @ManyToOne(() => Room, room => room.likeUsers, { nullable: true })
    @JoinColumn({ name: "roomId" })
    room: Promise<Room>;

} 