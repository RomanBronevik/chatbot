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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ingredient_service_1 = require("../services/ingredient.service");
const request_decorator_1 = require("../../security/decorators/request.decorator");
let IngredientController = class IngredientController {
    constructor(ingredientService) {
        this.ingredientService = ingredientService;
    }
    async create(createIngredientDTO, req, res) {
        const entitySaved = await this.ingredientService.create(createIngredientDTO);
        res.status(common_1.HttpStatus.CREATED).json(entitySaved);
    }
    async findAll(req, res) {
        const entities = await this.ingredientService.findAll();
        res.status(common_1.HttpStatus.OK).json(entities);
    }
    async findById(id, res) {
        const entity = await this.ingredientService.findById(id);
        res.status(common_1.HttpStatus.OK).json(entity);
    }
    async delete(id, res) {
        const ingredientDeleted = await this.ingredientService.delete(id);
        res.status(common_1.HttpStatus.OK).json(ingredientDeleted);
    }
    async update(id, updateIngredient, res) {
        const ingredientUpdated = await this.ingredientService.update(id, updateIngredient);
        res.status(common_1.HttpStatus.OK).json(ingredientUpdated);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], IngredientController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IngredientController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IngredientController.prototype, "findById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IngredientController.prototype, "delete", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], IngredientController.prototype, "update", null);
IngredientController = __decorate([
    common_1.Controller('ingredients'),
    __metadata("design:paramtypes", [ingredient_service_1.IngredientService])
], IngredientController);
exports.IngredientController = IngredientController;
//# sourceMappingURL=ingredient.controller.js.map