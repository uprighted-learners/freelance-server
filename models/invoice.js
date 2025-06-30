const { mongoose } = require("../db")

const Invoice = new mongoose.Schema(
    {
        status: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        message: {
            type: String,
            required: false
        }
    }
);

module.exports = mongoose.model("invoice", Invoice)