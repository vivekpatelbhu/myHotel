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
const hotelController_1 = require("./hotelController");
const router = express.Router();
router.post("/register", (req, res) => {
    hotelController_1.createHotel(req, res);
});
router.get('/list', (req, res) => {
    hotelController_1.hotelList(req, res);
});
exports.default = router;
//# sourceMappingURL=hotelRoutes.js.map