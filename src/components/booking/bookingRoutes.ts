import * as express from "express";
import { Request, Response } from "express";
import { booking, bookingDetail, Payment, draftBooking, draftDetail, completeBooking } from "./bookingController";
const router = express.Router();

router.post("/book", (req: Request, res: Response) => {
    booking(req, res);
});
router.post('/payment', (req: Request, res: Response) => {
    Payment(req, res);
});
router.post('/bookingdata', (req: Request, res: Response) => {
    bookingDetail(req, res);
});
router.post('/cancle', (req: Request, res: Response) => {
    draftBooking(req, res);
});
router.post('/draft', (req: Request, res: Response) => {
    draftDetail(req, res);
});
router.post('/complete', (req: Request, res: Response) => {
    completeBooking(req, res);
});
export default router;