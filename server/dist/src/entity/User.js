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
const Room_1 = require("./Room");
var Gender;
(function (Gender) {
    Gender["GENDER_MALE"] = "male";
    Gender["GENDER_FEMALE"] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "birthdate", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "language", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "currentcy", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], User.prototype, "superhost", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], User.prototype, "email_verified", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email_secret", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "login_method", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "tokenVersion", void 0);
__decorate([
    type_graphql_1.Field(() => [Room_1.Room]),
    typeorm_1.OneToMany(() => Room_1.Room, room => room.id),
    __metadata("design:type", Promise)
], User.prototype, "roomConnection", void 0);
User = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map