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
        generatedLogotypes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Logotype"
        },
    ],


    }
    
)

module.exports = mongoose.model("User", userSchema)