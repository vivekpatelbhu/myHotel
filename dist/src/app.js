"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
// Connect to MongoDB
const mongoUrl = 'mongodb://localhost:27017/hotel';
mongoose_1.default.connect(mongoUrl).then(() => { }).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
app.use(express_1.default.static("src"));
app.use(express_1.default.static("src/components/public/images"));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.set('port', (process.env.PORT || 5000));
const routes = routes_1.default(app);
app.get("/index", (req, res) => {
    res.sendFile(__dirname + '/home.html');
});
app.get("/", (req, res) => {
    res.json('Hello MyHotel');
});
exports.default = app;
//# sourceMappingURL=app.js.map