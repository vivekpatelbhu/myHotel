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
const userModel_1 = __importDefault(require("./userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.createUser = (req, res) => {
    // console.log("you are in createAdmin API------>", req.body);
    if (!req.body.email || !req.body.password || !req.body.userName) {
        return res.status(400).json("arguments missing");
    }
    else {
        bcryptjs_1.default.genSalt(10, (err, salt) => {
            bcryptjs_1.default.hash(req.body.password, salt, (err, hashedPassword) => {
                // var hashedPassword = bcrypt.hashSync(req.body.password, 8);
                // console.log(hashedPassword);
                const user = new userModel_1.default({
                    email: req.body.email,
                    userName: req.body.userName,
                    password: hashedPassword,
                });
                user.save((err, value) => {
                    if (err) {
                        if (err.code == 11000) {
                            return res.status(400).json("username already exists");
                        }
                        else {
                            return res.status(500).json(err);
                        }
                    }
                    else if (value) {
                        return res.status(201).json({
                            msg: 'User Created Successfully', value
                        });
                    }
                });
            });
        });
    }
};
exports.userLogin = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // const auth: any = req.headers.authorization;
    // if (auth) {
    //     console.log('auth is-->', auth);
    //     const dta = auth.split("Basic");
    //     console.log("basic is------>", dta[0], +"encodestring is---->" + dta[1]);
    //     const bytes = base64.decode(dta[1]);
    //     const text = utf8.decode(bytes);
    //     // console.log("text is---->",text);
    //     const data = text.split(":");
    //     // console.log("data is-->",data);
    //     //  const decryptdata = encrypt.split(":");
    //     const email = data[0].toLowerCase();
    //     const password = data[1];
    console.log("you are in  Controller");
    if (!req.body.email || !req.body.password) {
        return res.status(400).json("arguments missing");
    }
    else {
        try {
            const user = yield userModel_1.default.findOne({
                email: req.body.email,
            }, {
                email: 1,
                password: 1,
                userName: 1,
                picture: 1,
            });
            if (user) {
                const result = bcryptjs_1.default.compareSync(req.body.password, user.password);
                if (result) {
                    const userObject = user.toObject(); // mongoose object to plain javascript object
                    delete userObject.password;
                    //  let expiry = Math.floor((Date.now() + (24 * 60 * 60 * 1000)) / 1000);
                    console.log("userObject====>", userObject);
                    const obj = {
                        msg: "login successful",
                        userId: userObject._id,
                        email: userObject.email,
                        userName: userObject.userName,
                    };
                    res.status(200).json(obj);
                }
                else {
                    res.status(401).json({ msg: "Authentication error" });
                }
            }
            else {
                res.status(404).json({ msg: "User does not exist" });
            }
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
});
//# sourceMappingURL=userController.js.map