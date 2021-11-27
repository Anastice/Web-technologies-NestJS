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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundtracksController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
let SoundtracksController = class SoundtracksController {
    create(createSoundtrackDto) {
        return 'This action adds a new soundtrack';
    }
    findAll(query) {
        return `This action returns all soundtracks (limit: ${query.limit} items)`;
    }
    findOne(id) {
        return `This action returns a #${id} soundtrack`;
    }
    update(id, updateSoundtrackDto) {
        return `This action updates a #${id} soundtrack`;
    }
    remove(id) {
        return `This action removes a #${id} soundtrack`;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof dto_1.CreateSoundtrackDto !== "undefined" && dto_1.CreateSoundtrackDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], SoundtracksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.ListAllEntities !== "undefined" && dto_1.ListAllEntities) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SoundtracksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoundtracksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.UpdateSoundtrackDto !== "undefined" && dto_1.UpdateSoundtrackDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], SoundtracksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoundtracksController.prototype, "remove", null);
SoundtracksController = __decorate([
    (0, common_1.Controller)('soundtracks')
], SoundtracksController);
exports.SoundtracksController = SoundtracksController;
//# sourceMappingURL=soundtracks.controller.js.map