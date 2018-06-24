
import { default as mongoose } from 'mongoose';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
    },
    userName: {
        type: String
    }
},
    { timestamps: true });

export default mongoose.model('user', userSchema);