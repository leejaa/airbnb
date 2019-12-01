import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
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

  @PrimaryColumn()
  roomId: number;

  @ManyToOne(() => Room,  room => room.photoConnection, { primary: true })
    @JoinColumn({ name: "roomId" })
    room: Promise<Room>;

} 