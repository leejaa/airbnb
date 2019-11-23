import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

export enum Gender {
  GENDER_MALE = "male",
  GENDER_FEMALE = "female",
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  avatar: string;

  @Field(() => String)
  @Column()
  gender: string;

  @Field(() => Date)
  @Column()
  birthdate: Date;

  @Field(() => String)
  @Column()
  language: string;

  @Field(() => String)
  @Column()
  currentcy: string;

  @Field(() => Boolean)
  @Column({ default: false })
  superhost: boolean;

  @Field(() => Boolean)
  @Column({ default: false })
  email_verified: boolean;

  @Field(() => String)
  @Column()
  email_secret: string;

  @Field(() => String)
  @Column()
  login_method: string;

}