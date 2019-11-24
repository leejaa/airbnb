import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import GraphQLJSON from "graphql-type-json";
import { Photo } from "./Photo";

@ObjectType()
@Entity()
export class Room extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ type: 'text' })
  description: string;

  @Field(() => String)
  @Column()
  country: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => Int)
  @Column({ type: 'integer' })
  price: Number;

  @Field(() => String)
  @Column({ type: 'text' })
  address: String;

  @Field(() => Int)
  @Column({ type: 'integer' })
  guests: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  beds: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  bedrooms: Number;

  @Field(() => Int)
  @Column({ type: 'integer' })
  baths: Number;

  @Field(() => Int)
  @Column({ type: 'timestamp' })
  check_in: Number;

  @Field(() => Int)
  @Column({ type: 'timestamp' })
  check_out: Number;

  @Field(() => Boolean)
  @Column({ type: 'boolean' })
  instant_book: Boolean;

  @Field()
  @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    host: User;

  @Field(() => String)
  @Column()
  room_type: String;

  @Field(() => GraphQLJSON)
  @OneToMany( () => Photo , photo => photo.id, { 
    cascade : true 
  })
  photos : Photo[];


}