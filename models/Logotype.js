const mongoose = require("mongoose")

const logotypeSchema = new mongoose.Schema({
 
    code: {
        type: Number,
        required: true,
    },
    job_id: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }

    }
)
















module.exports = mongoose.model("Logotype", logotypeSchema)