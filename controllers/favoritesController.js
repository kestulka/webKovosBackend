const Favorites = require("../models/Favorites")
const asyncHandler = require("express-async-handler")

const makeFavorite = asyncHandler(async(req, res) => {
    if (!req.body._id){
        res.status(400)
        throw new Error("Please add logotype id")
    }

    const favorite = await Favorites.create({
        logoId: req.body.user._id,
    })

    req.user.favorites.push(favorite._id)
    await req.user.save()

    res.status(201).json(favorite)
})

module.exports = {
    makeFavorite
}