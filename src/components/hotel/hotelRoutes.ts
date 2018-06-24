import * as express from "express";
import { Request, Response } from "express";
import { createHotel, hotelList } from "./hotelController";
const router = express.Router();


router.post("/register", (req: Request, res: Response) => {
    createHotel(req, res);
});
router.get('/list', (req: Request, res: Response) => {
    hotelList(req, res);
});
export default router;