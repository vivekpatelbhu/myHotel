"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hotelModel_1 = __importDefault(require("./hotelModel"));
exports.createHotel = (req, res) => {
    if (!req.body.hotelName || !req.body.localadd || !req.body.city || !req.body.state || !req.body.phone) {
        return res.status(400).json("arguments missing");
    }
    else {
        const hotel = new hotelModel_1.default({
            hotelName: req.body.hotelName,
            localadd: req.body.localadd,
            city: req.body.city,
            state: req.body.state,
            phone: req.body.phone,
            charge: req.body.charge,
            roomService: req.body.roomService,
            gym: req.body.gym,
            restaurant: req.body.restaurant,
            parking: req.body.parking,
            pool: req.body.pool,
            wifi: req.body.wifi
        });
        hotel.save((err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            else if (data) {
                return res.status(201).json({ msg: "hotel created successfully!", data });
            }
        });
    }
};
exports.hotelList = (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log('body in hotellist....', req.body);
    try {
        const hotelData = yield hotelModel_1.default.find({});
        res.status(200).json(hotelData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
//# sourceMappingURL=hotelController.js.map