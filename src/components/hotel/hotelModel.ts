
import { default as mongoose } from 'mongoose';


const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true
    },
    localadd: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    charge: {
        type: Number,
        required: true
    },
    roomService: {
        type: Boolean,
        default: false
    },
    gym: {
        type: Boolean,
        default: false
    },
    restaurant: {
        type: Boolean,
        default: false
    },
    parking: {
        type: Boolean,
        default: false
    },
    pool: {
        type: Boolean,
        default: false
    },
    wifi: {
        type: Boolean,
        default: false
    },

},

    { timestamps: true });

export default mongoose.model('hotel', hotelSchema);