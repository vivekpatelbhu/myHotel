
import { default as mongoose } from 'mongoose';


const bookingSchema = new mongoose.Schema({
    HotelName: {
        type: String,
        default: "Taj"
    },
    fromDate: {
        type: String,
    },
    toDate: {
        type: String,
    },
    hotelID: {
        type: String,
    },
    userID: {
        type: String,
        required: true
    },
    noOfRoom: {
        type: Number
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
    },
    Date: {
        type: Date,
        default: Date.now()
    }
},
    { timestamps: true });
export default mongoose.model('booking', bookingSchema);