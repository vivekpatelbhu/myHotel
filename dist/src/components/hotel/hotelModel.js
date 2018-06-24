"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const hotelSchema = new mongoose_1.default.Schema({
    hotelName: {
        type: String,
        required: true
    },
    localadd: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    charge: {
        type: Number,
        required: true
    },
    roomService: {
        type: Boolean,
        default: false
    },
    gym: {
        type: Boolean,
        default: false
    },
    restaurant: {
        type: Boolean,
        default: false
    },
    parking: {
        type: Boolean,
        default: false
    },
    pool: {
        type: Boolean,
        default: false
    },
    wifi: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('hotel', hotelSchema);
//# sourceMappingURL=hotelModel.js.map