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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Photo_1 = require("./Photo");
const User_1 = require("./User");
let Room = class Room extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Room.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Room.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Room.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Room.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Room.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Room.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], Room.prototype, "guests", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], Room.prototype, "beds", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], Room.prototype, "bedrooms", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], Room.prototype, "baths", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Number)
], Room.prototype, "check_in", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Number)
], Room.prototype, "check_out", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Room.prototype, "instant_book", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Room.prototype, "room_type", void 0);
__decorate([
    type_graphql_1.Field(() => [Photo_1.Photo]),
    typeorm_1.OneToMany(() => Photo_1.Photo, photo => photo.room),
    __metadata("design:type", Promise)
], Room.prototype, "photoConnection", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Room.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    typeorm_1.ManyToOne(() => User_1.User, user => user.roomConnection, { primary: true }),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", Promise)
], Room.prototype, "user", void 0);
Room = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Room);
exports.Room = Room;
//# sourceMappingURL=Room.js.map