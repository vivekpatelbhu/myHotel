"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    HotelName: {
        type: String,
        default: "Taj"
    },
    fromDate: {
        type: String,
        default: new Date()
    },
    toDate: {
        type: String,
        default: new Date()
    },
    hotelID: {
        type: String,
    },
    userID: {
        type: String,
        required: true
    },
    noOfRoom: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('booking', bookingSchema);
//# sourceMappingURL=bookingModel.js.map