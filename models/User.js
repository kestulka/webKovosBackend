const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(

    {
        email: {
            type: String,
            required: [true, "Please add email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please add password"]
        },

    }
    
)

module.exports = mongoose.model("User", userSchema)