import {
    Resolver,
    Mutation,
    Arg,
    Int,
    InputType,
    Field,
    Query,
    UseMiddleware,
    Ctx,
  } from "type-graphql";
import _ from "lodash";
import { Room } from "../entity/Room";
import { Photo } from "../entity/Photo";
import { User } from "../entity/User";
import { isAuth } from "../auth/isAuth";
import { MyContext } from "../auth/MyContext";
import { fakeWords } from "../const/words";
import { fakeDecryptions } from "../const/decryption";
import { fakeCities } from "../const/cities";
import { fakeAddress } from "../const/address";
import { fakeCountries } from "../const/countries";

@InputType()
class RoomInput {
  @Field()
  name: string;

  @Field()
  country: string;

  @Field()
  description: string;

  @Field()
  city: string;

  @Field(() => Int)
  price: number;

  @Field()
  address: string;

  @Field()
  userId: number;
  
}

@InputType()
class PhotoInput {

  @Field()
  caption: string;

  @Field()
  file: string;

  @Field()
  roomId: number;

  @Field()
  hostId: number;

}

  @Resolver()
  export class RoomResolver {
    @Mutation(() => Room)
    async createRoom(
      @Arg("options", () => RoomInput) options: RoomInput) {
      const room = await Room.create(options).save();
      return room;
    }

    @Mutation(() => Room)
    async createFakeRoom() {
      const users : any = await User.find();
      const userIdList = _.map( users, user => user.id );
      let room;
      for ( const a of userIdList ) {
        console.log('a', a);
        const options = {
          name: fakeWords[ Math.floor(Math.random() * fakeWords.length) ],
          country: fakeCountries[ Math.floor(Math.random() * fakeCountries.length) ],
          description: fakeDecryptions[ Math.floor(Math.random() * fakeDecryptions.length) ],
          city: fakeCities[ Math.floor(Math.random() * fakeCities.length) ],
          price: Math.floor(Math.random() * 1000000000),
          address: fakeAddress[ Math.floor(Math.random() * fakeAddress.length) ],
          userId: userIdList[ Math.floor(Math.random() * userIdList.length) ],
        };
        room = await Room.create(options).save();
      }
      return room;
    }

    @Mutation(() => Photo)
    async createPhoto(@Arg("options", () => PhotoInput) options: PhotoInput){
      const photo = await Photo.create(options).save();
      return photo;
    }

    @Mutation(() => Photo)
    async createFakePhoto(){
      const rooms = await Room.find();
      let photo;
      for ( const room of rooms ) {
        const options = {
          caption: fakeDecryptions[ Math.floor(Math.random() * fakeDecryptions.length) ],
          file: `https://i.picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300.jpg`,
          roomId: room.id,
        };
        photo = await Photo.create(options).save();
      }
      return photo;
    }

    @Query(() => [Photo])
    async selectAllPhotos(){
      const photos = await Photo.find();
      return photos;
    }

    @Query(() => [Room])
    async selectAllRooms(
      ){
      // const rooms = await Room.find();
      // const rooms = await Room.find({
      //   join: {
      //     alias: "Room",
      //     innerJoinAndSelect: {
      //       photo: "Room.photoConnection"
      //     }
      //   },
      // });
      const rooms = await Room.find({
        relations: ["photoConnection"]
      });
      return rooms;
    }

    @Query(() => [Room])
    @UseMiddleware(isAuth)
    async selectRooms(
      @Arg("skip") skip: number,
      @Arg("take") take: number,
      @Ctx() { payload }: MyContext
      ){
      const { userId = '' }: any = payload;
      const rooms = await Room.find({
        where: { userId },
        join: {
          alias: "Room",
          innerJoinAndSelect: {
            photo: "Room.photoConnection"
          }
        },
        skip,
        take,
      });
      return rooms;
    }

    @Mutation(() => Room)
    async updateRoom(
      @Arg("options", () => RoomInput) options: RoomInput,
      @Arg("id") id: number,
    ) {
      const room = await Room.update(options, { id });
      return room;
    }

    @Mutation(() => Boolean)
    async deleteRoom(
    ) {
      try {
        await Room.delete({});
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    @Mutation(() => Boolean)
    async deletePhoto(
    ) {
      try {
        await Photo.delete({});
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    @Mutation(() => Boolean)
    async deleteUser(
    ) {
      try {
        await User.delete({});
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }