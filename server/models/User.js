const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
});


//1st arg - collection
//2nd arg - schema
mongoose.model('users', userSchema)

