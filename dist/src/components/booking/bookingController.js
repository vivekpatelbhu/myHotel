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
const bookingModel_1 = __importDefault(require("./bookingModel"));
const hotelModel_1 = __importDefault(require("../hotel/hotelModel"));
exports.booking = (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("body is====>", req.body);
    let noRoom = parseInt(req.body.noOFRoom);
    console.log("noof rommmmmm--type", noRoom, +"typeof Room No--->", typeof noRoom);
    let hoteldata = yield hotelModel_1.default.findOne({ _id: req.body.hotelID }, { hotelName: 1 });
    console.log("hotellll Name---->", hoteldata, hoteldata.hotelName);
    try {
        const booking = new bookingModel_1.default({
            HotelName: hoteldata.hotelName,
            fromDate: req.body.fromDate,
            toDate: req.body.toDate,
            hotelID: req.body.hotelID,
            userID: req.body.userID,
            noOfRoom: noRoom,
            status: req.body.status,
            amount: req.body.amount
        });
        yield booking.save();
        res.status(200).json(booking);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.draftBooking = (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("body is====>", req.body);
    let noRoom = parseInt(req.body.noOFRoom, 10);
    console.log("Romm rommmmmm-type-->", noRoom + "typeof Room No--->", typeof noRoom);
    let hotelData = yield hotelModel_1.default.findOne({ _id: req.body.hotelID });
    console.log("hotellll Name---->", hotelData, hotelData.hotelName, hotelData.charge);
    console.log("date.........>", new Date(), typeof new Date());
    console.log("date.........>", Date.now(), typeof Date.now());
    try {
        // const res: any = hotelData[0].hotelName;
        // console.log("hotel name is", res);
        const cancelBooking = new bookingModel_1.default({
            fromDate: req.body.fromDate ? req.body.fromDate : new Date(),
            toDate: req.body.toDate ? req.body.toDate : new Date(),
            hotelID: req.body.hotelID,
            HotelName: hotelData.hotelName,
            userID: req.body.userID,
            noOfRoom: noRoom,
            status: req.body.status,
            amount: req.body.amount
        });
        yield cancelBooking.save();
        res.status(200).json(cancelBooking);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.draftDetail = (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("body is====>", req.body);
    try {
        const draftData = yield bookingModel_1.default.find({ userID: req.body.userID, status: false });
        console.log('lenggggggggth', Object.keys(draftData).length);
        if (Object.keys(draftData).length >= 1)
            res.status(200).json(draftData);
        else
            res.status(200).json(draftData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.completeBooking = (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("body is====>", req.body);
    try {
        const completeData = yield bookingModel_1.default.find({ userID: req.body.userID, status: true });
        res.status(200).json(completeData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.Payment = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const payment = yield bookingModel_1.default.findOneAndUpdate({ _id: req.body._id }, { $set: { amount: req.body.amount, status: true } });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.bookingDetail = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const bookingData = yield bookingModel_1.default.find({ userID: req.body.userID, hotelID: req.body.hotelID }, { status: 1 });
        res.status(200).json(bookingData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
//# sourceMappingURL=bookingController.js.map