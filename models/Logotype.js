const mongoose = require("mongoose")

const logotypeSchema = new mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    prompt: {
        type: String,
        required: true
    }

    }
)
















module.exports = mongoose.model("Logotype", logotypeSchema)