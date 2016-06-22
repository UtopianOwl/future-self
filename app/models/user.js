var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    messages: [{
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        sendAt: {
            type: Date,
            required: true,
        },
        timeDelay: Number,
    }],
    name: String
});

module.exports = mongoose.model("User", userSchema);