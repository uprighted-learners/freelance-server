const { mongoose } = require("../db")

const Job = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        job: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        jobStatus: {
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model("job", Job)