import { default as User } from "./userModel";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import base64 from "base-64";
import utf8 from "utf8";

export let createUser = (req: Request, res: Response) => {
    // console.log("you are in createAdmin API------>", req.body);
    if (!req.body.email || !req.body.password || !req.body.userName) {
        return res.status(400).json("arguments missing");
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                // var hashedPassword = bcrypt.hashSync(req.body.password, 8);
                // console.log(hashedPassword);
                const user = new User({
                    email: req.body.email,
                    userName: req.body.userName,
                    password: hashedPassword,

                });
                user.save((err: any, value: any) => {
                    if (err) {
                        if (err.code == 11000) {
                            return res.status(400).json("username already exists");
                        } else {
                            return res.status(500).json(err);
                        }
                    } else if (value) {
                        return res.status(201).json({
                            msg: 'User Created Successfully', value
                        });
                    }
                });
            });
        });
    }

};

export let userLogin = async (req: Request, res: Response) => {
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
        } else {
            try {
                const user: any = await User.findOne({
                    email: req.body.email,
                },
                    {
                        email: 1,
                        password: 1,
                        userName: 1,
                        picture: 1,
                        // permission: 1
                    });
                if (user) {
                    const result = bcrypt.compareSync(req.body.password, user.password);
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
            } catch (error) {
                res.status(500).json(error);
            }

        }
};