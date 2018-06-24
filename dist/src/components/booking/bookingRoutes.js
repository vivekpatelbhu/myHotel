"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const bookingController_1 = require("./bookingController");
const router = express.Router();
router.post("/book", (req, res) => {
    bookingController_1.booking(req, res);
});
router.post('/payment', (req, res) => {
    bookingController_1.Payment(req, res);
});
router.post('/bookingdata', (req, res) => {
    bookingController_1.bookingDetail(req, res);
});
router.post('/cancle', (req, res) => {
    bookingController_1.draftBooking(req, res);
});
router.post('/draft', (req, res) => {
    bookingController_1.draftDetail(req, res);
});
router.post('/complete', (req, res) => {
    bookingController_1.completeBooking(req, res);
});
exports.default = router;
//# sourceMappingURL=bookingRoutes.js.map