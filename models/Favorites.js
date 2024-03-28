const mongoose = require("mongoose")

const favoritesSchema = new mongoose.Schema(
    {
        logoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Logotype"
        }
    }
)

module.exports = mongoose.model("Favorites", favoritesSchema)