import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";
import { Room } from "./Room";

@ObjectType()
@Entity()
export class Photo extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  caption: string;

  @Field()
  @Column({ nullable: true })
  file: string;

  @Column({ nullable: true })
  roomId: number;

  @Field(() => Room)
  @ManyToOne(() => Room,  room => room.photoConnection, { nullable: true })
  @JoinColumn({ name: "roomId" })
  room: Promise<Room>;

  @Column({ nullable: true })
  hostId: number;

} 