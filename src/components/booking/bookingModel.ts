
import { default as mongoose } from 'mongoose';


const bookingSchema = new mongoose.Schema({
    HotelName: {
        type: String,
        default: "Taj"
    },
    fromDate: {
        type: String,
        default: new Date()
    },
    toDate: {
        type: String,
        default: new Date()
    },
    hotelID: {
        type: String,
    },
    userID: {
        type: String,
        required: true
    },
    noOfRoom: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
    },
},
    { timestamps: true });
export default mongoose.model('booking', bookingSchema);