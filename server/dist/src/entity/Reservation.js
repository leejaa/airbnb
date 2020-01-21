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
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const User_1 = require("./User");
const Room_1 = require("./Room");
let Reservation = class Reservation extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reservation.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'timestamp' }),
    __metadata("design:type", Number)
], Reservation.prototype, "check_in", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: 'timestamp' }),
    __metadata("design:type", Number)
], Reservation.prototype, "check_out", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.default),
    typeorm_1.OneToOne(() => User_1.User, { cascade: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.User)
], Reservation.prototype, "guest", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.default),
    typeorm_1.OneToOne(() => Room_1.Room, { cascade: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Room_1.Room)
], Reservation.prototype, "room", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Reservation.prototype, "in_progress", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Reservation.prototype, "is_finished", void 0);
Reservation = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Reservation);
exports.Reservation = Reservation;
//# sourceMappingURL=Reservation.js.map