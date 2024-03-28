const mongoose = require("mongoose")

const logotypeSchema = new mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    job_id: {
        type: String,
        required: true,
    },

    }
)
















module.exports = mongoose.model("Logotype", logotypeSchema)