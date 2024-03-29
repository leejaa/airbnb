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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../entity/Recipe");
const Comment_1 = require("../entity/Comment");
var Topic;
(function (Topic) {
    Topic["NewComment"] = "NEW_COMMENT";
    Topic["NewRecipe"] = "NEW_RECIPE";
})(Topic || (Topic = {}));
let RecipeResolver = class RecipeResolver {
    constructor() {
        this.recipes = Recipe_1.sampleRecipes.slice();
    }
    recipe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.recipes.find(recipe => recipe.id === id);
        });
    }
    addNewComment(input, notifyAboutNewComment) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = this.recipes.find(r => r.id === input.recipeId);
            if (!recipe) {
                return false;
            }
            const comment = {
                content: input.content,
                nickname: input.nickname,
                date: new Date(),
            };
            recipe.comments.push(comment);
            yield notifyAboutNewComment({
                content: comment.content,
                nickname: comment.nickname,
                dateString: comment.date.toISOString(),
                recipeId: input.recipeId,
            });
            return true;
        });
    }
    newComments(newComment) {
        return {
            content: newComment.content,
            date: new Date(newComment.dateString),
            nickname: newComment.nickname,
        };
    }
};
__decorate([
    type_graphql_1.Query(() => Recipe_1.Recipe, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipe", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("comment")),
    __param(1, type_graphql_1.PubSub(Topic.NewComment)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Comment_1.CommentInput, Function]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "addNewComment", null);
__decorate([
    type_graphql_1.Subscription(() => Comment_1.Comment, {
        topics: Topic.NewComment,
        filter: () => {
            return true;
        },
    }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Comment_1.Comment)
], RecipeResolver.prototype, "newComments", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver()
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
//# sourceMappingURL=RecipeResolver.js.map