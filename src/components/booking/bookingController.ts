import { default as Booking } from "./bookingModel";
import { Request, Response, NextFunction } from "express";
import hotel from '../hotel/hotelModel';
import moment from 'moment-timezone';
import { Mongoose } from "mongoose";

export let booking = async (req: Request, res: Response) => {
    console.log("body is====>", req.body);
    let noRoom = parseInt(req.body.noOFRoom);
    console.log("noof rommmmmm--type", noRoom, +"typeof Room No--->", typeof noRoom);
    let hoteldata: any = await hotel.findOne({ _id: req.body.hotelID }, { hotelName: 1 });
    console.log("hotellll Name---->", hoteldata, hoteldata.hotelName);
    try {
        const booking = new Booking({
            HotelName: hoteldata.hotelName,
            fromDate: req.body.fromDate,
            toDate: req.body.toDate,
            hotelID: req.body.hotelID,
            userID: req.body.userID,
            noOfRoom: noRoom,
            status: req.body.status,
            amount: req.body.amount
        });
        await booking.save();
        res.status(200).json(booking);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export let draftBooking = async (req: Request, res: Response) => {
    console.log("body is====>", req.body);
    let noRoom: any = parseInt(req.body.noOFRoom, 10);
    console.log("Romm rommmmmm-type-->", noRoom + "typeof Room No--->", typeof noRoom);
    let hotelData: any = await hotel.findOne({ _id: req.body.hotelID });
    console.log("hotellll Name---->", hotelData, hotelData.hotelName, hotelData.charge);
    console.log("date.........>", new Date(), typeof new Date());
    console.log("date.........>", Date.now(), typeof Date.now());

    try {

        // const res: any = hotelData[0].hotelName;
        // console.log("hotel name is", res);
        const cancelBooking = new Booking({
            fromDate: req.body.fromDate ? req.body.fromDate : new Date(),
            toDate: req.body.toDate ? req.body.toDate : new Date(),
            hotelID: req.body.hotelID,
            HotelName: hotelData.hotelName,
            userID: req.body.userID,
            noOfRoom: noRoom,
            status: req.body.status,
            amount: req.body.amount
        });
        await cancelBooking.save();
        res.status(200).json(cancelBooking);
    }

    catch (err) {
        res.status(500).json(err);
    }
};

export let draftDetail = async (req: Request, res: Response) => {
    console.log("body is====>", req.body);
    try {
        const draftData: any = await Booking.find({ userID: req.body.userID, status: false });
        console.log('lenggggggggth', Object.keys(draftData).length);
        if (Object.keys(draftData).length >= 1)
            res.status(200).json(draftData);
        else
            res.status(200).json(draftData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export let completeBooking = async (req: Request, res: Response) => {
    console.log("body is====>", req.body);
    try {
        const completeData = await Booking.find({ userID: req.body.userID, status: true });
        res.status(200).json(completeData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export let Payment = async (req: Request, res: Response) => {
    try {
        const payment = await Booking.findOneAndUpdate({ _id: req.body._id }, { $set: { amount: req.body.amount, status: true } });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export let bookingDetail = async (req: Request, res: Response) => {
    try {
        const bookingData: any = await Booking.find({ userID: req.body.userID, hotelID: req.body.hotelID }, { status: 1 });
        res.status(200).json(bookingData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};