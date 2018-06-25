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
    },
    toDate: {
        type: String,
    },
    hotelID: {
        type: String,
    },
    userID: {
        type: String,
        required: true
    },
    noOfRoom: {
        type: Number
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
    },
    Date: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model('booking', bookingSchema);
//# sourceMappingURL=bookingModel.js.map