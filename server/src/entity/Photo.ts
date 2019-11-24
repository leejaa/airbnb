import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { Room } from "./Room";
import GraphQLJSON from "graphql-type-json";

@ObjectType()
@Entity()
export class Photo extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  caption: string;

  @Field()
  @Column()
  file: string;

  @Field( () => GraphQLJSON )
  @OneToOne(() => Room, { cascade: true })
    @JoinColumn()
    room: Room;

}