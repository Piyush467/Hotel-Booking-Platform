const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

// ye hmare authentication and authorization ke liye ek userSchema banaya hai
// ismne hum passport-local-mongoose ka istemal kare hai jo hmara
// - username,salting,hashvalue storage in database sb kr deta hai
