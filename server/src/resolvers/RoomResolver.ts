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
  Float,
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
import { verify } from "jsonwebtoken";
import { defense } from "../utils/defense";

@InputType()
class RoomInput {
  @Field()
  houseType: string;

  @Field()
  houseRadio: string;

  @Field(() => [String])
  convenience: [string];

  @Field(() => [String])
  dates: [string];

  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lng: number;

  @Field()
  address: string;

  @Field()
  post_code: string;

  @Field()
  imageUrl: string;

  // @Field()
  // userId: number;

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
    @Arg("options", () => RoomInput) options: RoomInput,
    @Ctx() context: MyContext
  ) {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    const room = await Room.create({
      ...options,
      name: fakeWords[Math.floor(Math.random() * fakeWords.length)],
      country: fakeCountries[Math.floor(Math.random() * fakeCountries.length)],
      description: fakeDecryptions[Math.floor(Math.random() * fakeDecryptions.length)],
      price: Math.floor(Math.random() * 1000000000),
      city: fakeCities[Math.floor(Math.random() * fakeCities.length)],
      userId: payload?.userId
    }).save();
    const photo = await Photo.create({
      caption: fakeDecryptions[Math.floor(Math.random() * fakeDecryptions.length)],
      file: options?.imageUrl,
      roomId: room.id,
    }).save();
    return room;
  }

  @Mutation(() => Room)
  async createFakeRoom() {
    const users: any = await User.find();
    const userIdList = _.map(users, user => user.id);
    let room;
    for (const a of userIdList) {
      console.log('a', a);
      const options = {
        name: fakeWords[Math.floor(Math.random() * fakeWords.length)],
        country: fakeCountries[Math.floor(Math.random() * fakeCountries.length)],
        description: fakeDecryptions[Math.floor(Math.random() * fakeDecryptions.length)],
        city: fakeCities[Math.floor(Math.random() * fakeCities.length)],
        price: Math.floor(Math.random() * 1000000000),
        address: fakeAddress[Math.floor(Math.random() * fakeAddress.length)],
        userId: userIdList[Math.floor(Math.random() * userIdList.length)],
      };
      room = await Room.create(options).save();
    }
    return room;
  }

  @Mutation(() => Photo)
  async createPhoto(
    @Arg("options", () => PhotoInput) options: PhotoInput,
    @Ctx() context: MyContext
  ) {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    const photo = await Photo.create(options).save();
    return photo;
  }

  @Mutation(() => Photo)
  async createFakePhoto() {
    const rooms = await Room.find();
    let photo;
    for (const room of rooms) {
      const options = {
        caption: fakeDecryptions[Math.floor(Math.random() * fakeDecryptions.length)],
        file: `https://i.picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300.jpg`,
        roomId: room.id,
      };
      photo = await Photo.create(options).save();
    }
    return photo;
  }

  @Query(() => [Photo])
  async selectAllPhotos() {
    const photos = await Photo.find({
      order: {
        id: 'DESC'
      }
    });
    return photos;
  }

  @Query(() => [Room])
  async selectAllRooms(
  ) {
    let rooms = await Room.find({
      relations: ["photoConnection"],
      order: {
        id: 'DESC'
      }
    });
    rooms = defense( rooms );
    return rooms;
  }

  @Query(() => [Room])
  @UseMiddleware(isAuth)
  async selectRooms(
    @Arg("skip") skip: number,
    @Arg("take") take: number,
    @Ctx() { payload }: MyContext
  ) {
    const { userId = '' }: any = payload;
    let rooms : any = await Room.find({
      // where: { userId },
      join: {
        alias: "Room",
        innerJoinAndSelect: {
          photo: "Room.photoConnection"
        }
      },
      skip,
      take,
      order: {
        id: 'DESC'
      }
    });
    rooms = defense( rooms );
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
  async deleteAllRooms(
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
  async deleteRoom(
    @Arg("id") id: number
  ) {
    try {
      await Room.delete({
        id
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async deleteAllPhotos(
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
  async deletePhoto(
    @Arg("id") id: number
  ) {
    try {
      await Photo.delete({
        id
      });
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