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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const Room_1 = require("./Room");
let Review = class Review extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], Review.prototype, "review", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Review.prototype, "accuracy", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Review.prototype, "communication", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Review.prototype, "cleanliness", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Review.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Review.prototype, "check_in", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Review.prototype, "value", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.default),
    typeorm_1.OneToOne(() => User_1.User, { cascade: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.User)
], Review.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.default),
    typeorm_1.OneToOne(() => Room_1.Room, { cascade: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Room_1.Room)
], Review.prototype, "room", void 0);
Review = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Review);
exports.Review = Review;
//# sourceMappingURL=Review.js.map