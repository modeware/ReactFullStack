const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
});


//1st arg - collection
//2nd arg - schema
mongoose.model('users', userSchema)

