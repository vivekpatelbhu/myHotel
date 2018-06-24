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
const userController_1 = require("./userController");
const router = express.Router();
router.get("/test", (req, res) => {
    console.log("hello--");
    res.status(200).json({ msg: 'working' });
});
router.post("/register", (req, res) => {
    userController_1.createUser(req, res);
});
router.post('/login', (req, res) => {
    userController_1.userLogin(req, res);
});
exports.default = router;
//# sourceMappingURL=userRoutes.js.map