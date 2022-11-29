const mongoose = require("mongoose");
const User = require('../User/modelUser')
const Schema = mongoose.Schema
const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: true,
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: true,

    }
}, {timestamps: true});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;