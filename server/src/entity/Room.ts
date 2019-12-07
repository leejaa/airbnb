import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToMany, JoinColumn, ManyToOne, PrimaryColumn, } from "typeorm";
import { Field, Int, ObjectType, ID } from "type-graphql";
import { Photo } from "./Photo";
import { User } from "./User";

@ObjectType()
@Entity()
export class Room extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ type: 'text', nullable: true })
  description: string;

  @Field(() => String)
  @Column({ nullable: true })
  country: string;

  @Field(() => String)
  @Column({ nullable: true })
  city: string;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true })
  price: Number;

  @Field(() => String)
  @Column({ type: 'text', nullable: true })
  address: String;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true })
  guests: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true })
  beds: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true })
  bedrooms: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true })
  baths: Number;

  @Field(() => Int)
  @Column({ type: 'timestamp', nullable: true })
  check_in: Number;

  @Field(() => Int)
  @Column({ type: 'timestamp', nullable: true })
  check_out: Number;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: true })
  instant_book: Boolean;

  @Field(() => String)
  @Column({ nullable: true })
  room_type: String;

  @Field(() => [Photo])
  @OneToMany(() => Photo, photo => photo.room)
  photoConnection: Promise<Photo[]>;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User,  user => user.roomConnection, { primary: true })
    @JoinColumn({ name: "userId" })
    user: Promise<User>;
}