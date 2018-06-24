import * as express from "express";
import { Request, Response } from "express";
import { createUser, userLogin } from "./userController";
const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
    console.log("hello--");
    res.status(200).json({ msg: 'working' });
});

router.post("/register", (req: Request, res: Response) => {
    createUser(req, res);
});
router.post('/login', (req: Request, res: Response) => {
    userLogin(req, res);
});
export default router;