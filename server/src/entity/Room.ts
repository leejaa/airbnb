import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable, } from "typeorm";
import { Field, Int, ObjectType, ID, Float } from "type-graphql";
import { Photo } from "./Photo";
import { User } from "./User";
import { Like } from "./Like";
import { Review } from "./Review";
import { Reservation } from "./Reservation";

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
  @Column({ nullable: true, default: '' })
  city: string;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true })
  price: Number;

  @Field(() => Int)
  @Column({ type: 'integer', nullable: true })
  score: Number;

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
  @Column({ type: 'text', nullable: true })
  houseType: String;

  @Field(() => String)
  @Column({ type: 'text', nullable: true })
  houseRadio: String;

  @Field(() => [String])
  @Column({  type: 'text' , array: true, nullable: true })
  convenience: string[];

  @Field(() => [String])
  @Column({ type: 'text' , array: true, nullable: true })
  dates: string[];

  @Field(() => String)
  @Column({ nullable: true })
  room_type: String;

  @Field(() => String)
  @Column({ nullable: true })
  post_code: String;

  @Field(() => Float)
  @Column({ type: 'float' ,nullable: true })
  lat: Number;

  @Field(() => Float)
  @Column({ type: 'float' ,nullable: true })
  lng: Number;

  @Field(() => [Photo])
  @OneToMany(() => Photo, photo => photo.room)
  photoConnection: Promise<Photo[]>;

  @Column({ nullable: true })
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User,  user => user.roomConnection)
  @JoinColumn({ name: "userId" })
  user: Promise<User>;

  @Field(() => [Like])
  @OneToMany(() => Like, like => like.room)
  likeUsers: Promise<Like[]>;

  @Field(() => [Review])
  @OneToMany(() => Review, review => review.room)
  reviews: Promise<Review[]>;

  @Field(() => [Reservation])
  @OneToMany(() => Reservation, reservation => reservation.room)
  reservation: Promise<Reservation[]>;

}