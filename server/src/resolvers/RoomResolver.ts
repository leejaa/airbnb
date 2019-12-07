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
import { Room } from "../entity/Room";
import { Photo } from "../entity/Photo";
import { User } from "../entity/User";
import { isAuth } from "../auth/isAuth";
import { MyContext } from "../auth/MyContext";

@InputType()
class RoomInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  city: string;

  @Field(() => Int)
  price: number;

  @Field()
  address: string;

  @Field()
  hostId: number;
  
}

@InputType()
class PhotoInput {

  @Field()
  caption: string;

  @Field()
  file: string;

  @Field()
  roomId: number;

}

  @Resolver()
  export class RoomResolver {
    @Mutation(() => Room)
    async createRoom(
      @Arg("options", () => RoomInput) options: RoomInput) {
      const room = await Room.create(options).save();
      return room;
    }

    @Mutation(() => Photo)
    async createPhoto(@Arg("options", () => PhotoInput) options: PhotoInput){
      const photo = await Photo.create(options).save();
      return photo;
    }

    @Query(() => [Photo])
    async selectPhotos(){
      const photos = await Photo.find();
      return photos;
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