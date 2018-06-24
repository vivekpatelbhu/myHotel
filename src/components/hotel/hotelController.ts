import Hotel from './hotelModel';
import { Request, Response, NextFunction } from "express";
export let createHotel = (req: Request, res: Response) => {
    if (!req.body.hotelName || !req.body.localadd || !req.body.city || !req.body.state || !req.body.phone) {
        return res.status(400).json("arguments missing");
    }
    else {
        const hotel = new Hotel({
            hotelName: req.body.hotelName,
            localadd: req.body.localadd,
            city: req.body.city,
            state: req.body.state,
            phone: req.body.phone,
            charge: req.body.charge,
            roomService: req.body.roomService,
            gym: req.body.gym,
            restaurant: req.body.restaurant,
            parking: req.body.parking,
            pool: req.body.pool,
            wifi: req.body.wifi
        });
        hotel.save((err: any, data: any) => {
            if (err) {
                return res.status(500).json(err);
            }
            else if (data) {
                return res.status(201).json({ msg: "hotel created successfully!", data });
            }
        });
    }
};

export let hotelList = async (req: Request, res: Response) => {
    console.log('body in hotellist....', req.body);
    try {
        const hotelData: any = await Hotel.find({});
        res.status(200).json(hotelData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};