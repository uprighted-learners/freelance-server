const { mongoose } = require("../db")

const Card = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true
        },
        monthlyIncome: {
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model("card", Card)