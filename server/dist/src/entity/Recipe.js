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
const class_transformer_1 = require("class-transformer");
const Comment_1 = require("./Comment");
let Recipe = class Recipe extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => [Comment_1.Comment]),
    __metadata("design:type", Array)
], Recipe.prototype, "comments", void 0);
Recipe = __decorate([
    type_graphql_1.ObjectType()
], Recipe);
exports.Recipe = Recipe;
exports.sampleRecipes = [
    createRecipe({
        id: "1",
        title: "Recipe 1",
        description: "Desc 1",
        comments: createComments([
            {
                date: new Date("2018-03-21"),
                content: "Very tasty!",
                nickname: "Anonymous",
            },
            {
                date: new Date("2018-01-12"),
                content: "Not so tasty!",
                nickname: "Anonymous again",
            },
        ]),
    }),
    createRecipe({
        id: "2",
        title: "Recipe 2",
        description: "Desc 2",
        comments: createComments([
            {
                date: new Date(),
                content: "Very good, very cheap!",
                nickname: "Master of cooking",
            },
        ]),
    }),
    createRecipe({
        id: "3",
        title: "Recipe 3",
        comments: [],
    }),
];
function createRecipe(recipeData) {
    return class_transformer_1.plainToClass(Recipe, recipeData);
}
function createComments(commentData) {
    return class_transformer_1.plainToClass(Comment_1.Comment, commentData);
}
let NewCommentsArgs = class NewCommentsArgs {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], NewCommentsArgs.prototype, "recipeId", void 0);
NewCommentsArgs = __decorate([
    type_graphql_1.ArgsType()
], NewCommentsArgs);
exports.NewCommentsArgs = NewCommentsArgs;
//# sourceMappingURL=Recipe.js.map