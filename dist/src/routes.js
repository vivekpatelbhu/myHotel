"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = __importDefault(require("./components/user/userRoutes"));
const hotelRoutes_1 = __importDefault(require("./components/hotel/hotelRoutes"));
const bookingRoutes_1 = __importDefault(require("./components/booking/bookingRoutes"));
const userString = "/user";
const hotelString = "/hotel";
const bookingString = '/booking';
exports.default = (app) => {
    app.use(userString, userRoutes_1.default);
    app.use(hotelString, hotelRoutes_1.default);
    app.use(bookingString, bookingRoutes_1.default);
};
//# sourceMappingURL=routes.js.map