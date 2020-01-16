import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";
import { Room } from "./Room";

export enum Gender {
  GENDER_MALE = "male",
  GENDER_FEMALE = "female",
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column({ nullable: true })
  name: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column({ nullable: true })
  avatar: string;

  @Field(() => String)
  @Column({ nullable: true })
  gender: string;

  @Field(() => Date)
  @Column({ nullable: true })
  birthdate: Date;

  @Field(() => String)
  @Column({ nullable: true })
  language: string;

  @Field(() => String)
  @Column({ nullable: true })
  currentcy: string;

  @Field(() => Boolean)
  @Column({ default: false, nullable: true })
  superhost: boolean;

  @Field(() => Boolean)
  @Column({ default: false, nullable: true })
  email_verified: boolean;

  @Field(() => String)
  @Column({ nullable: true })
  email_secret: string;

  @Field(() => String)
  @Column({ nullable: true })
  login_method: string;

  @Field(() => String)
  @Column({ nullable: true })
  tokenVersion: string;

  @Field(() => [Room])
  @OneToMany(() => Room, room => room.id)
  roomConnection: Promise<Room[]>;

}