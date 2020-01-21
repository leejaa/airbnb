"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const lodash_1 = __importDefault(require("lodash"));
const Room_1 = require("../entity/Room");
const Photo_1 = require("../entity/Photo");
const User_1 = require("../entity/User");
const isAuth_1 = require("../auth/isAuth");
const words_1 = require("../const/words");
const decryption_1 = require("../const/decryption");
const cities_1 = require("../const/cities");
const address_1 = require("../const/address");
const countries_1 = require("../const/countries");
let RoomInput = class RoomInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RoomInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RoomInput.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RoomInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RoomInput.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], RoomInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RoomInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], RoomInput.prototype, "userId", void 0);
RoomInput = __decorate([
    type_graphql_1.InputType()
], RoomInput);
let PhotoInput = class PhotoInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PhotoInput.prototype, "caption", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], PhotoInput.prototype, "file", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], PhotoInput.prototype, "roomId", void 0);
PhotoInput = __decorate([
    type_graphql_1.InputType()
], PhotoInput);
let RoomResolver = class RoomResolver {
    createRoom(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield Room_1.Room.create(options).save();
            return room;
        });
    }
    createFakeRoom() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.User.find();
            const userIdList = lodash_1.default.map(users, user => user.id);
            let room;
            for (const a of userIdList) {
                console.log('a', a);
                const options = {
                    name: words_1.fakeWords[Math.floor(Math.random() * words_1.fakeWords.length)],
                    country: countries_1.fakeCountries[Math.floor(Math.random() * countries_1.fakeCountries.length)],
                    description: decryption_1.fakeDecryptions[Math.floor(Math.random() * decryption_1.fakeDecryptions.length)],
                    city: cities_1.fakeCities[Math.floor(Math.random() * cities_1.fakeCities.length)],
                    price: Math.floor(Math.random() * 1000000000),
                    address: address_1.fakeAddress[Math.floor(Math.random() * address_1.fakeAddress.length)],
                    userId: userIdList[Math.floor(Math.random() * userIdList.length)],
                };
                room = yield Room_1.Room.create(options).save();
            }
            return room;
        });
    }
    createPhoto(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const photo = yield Photo_1.Photo.create(options).save();
            return photo;
        });
    }
    selectPhotos() {
        return __awaiter(this, void 0, void 0, function* () {
            const photos = yield Photo_1.Photo.find();
            return photos;
        });
    }
    selectAllRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            const rooms = yield Room_1.Room.find();
            return rooms;
        });
    }
    selectRooms(skip, take, { payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId = '' } = payload;
            const rooms = yield Room_1.Room.find({
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
        });
    }
    updateRoom(options, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield Room_1.Room.update(options, { id });
            return room;
        });
    }
    deleteRoom() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Room_1.Room.delete({});
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    deletePhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Photo_1.Photo.delete({});
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    deleteUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.User.delete({});
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Room_1.Room),
    __param(0, type_graphql_1.Arg("options", () => RoomInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoomInput]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createRoom", null);
__decorate([
    type_graphql_1.Mutation(() => Room_1.Room),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createFakeRoom", null);
__decorate([
    type_graphql_1.Mutation(() => Photo_1.Photo),
    __param(0, type_graphql_1.Arg("options", () => PhotoInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PhotoInput]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createPhoto", null);
__decorate([
    type_graphql_1.Query(() => [Photo_1.Photo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "selectPhotos", null);
__decorate([
    type_graphql_1.Query(() => [Room_1.Room]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "selectAllRooms", null);
__decorate([
    type_graphql_1.Query(() => [Room_1.Room]),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("skip")),
    __param(1, type_graphql_1.Arg("take")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "selectRooms", null);
__decorate([
    type_graphql_1.Mutation(() => Room_1.Room),
    __param(0, type_graphql_1.Arg("options", () => RoomInput)),
    __param(1, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoomInput, Number]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "updateRoom", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "deleteRoom", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "deletePhoto", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "deleteUser", null);
RoomResolver = __decorate([
    type_graphql_1.Resolver()
], RoomResolver);
exports.RoomResolver = RoomResolver;
//# sourceMappingURL=RoomResolver.js.map