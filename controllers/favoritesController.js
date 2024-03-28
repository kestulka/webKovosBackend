const Favorites = require("../models/Favorites")
const Logotype = require("../models/Logotype")
const asyncHandler = require("express-async-handler")

const makeFavorite = asyncHandler(async(req, res) => {

    try {

    const logotype = await Logotype.findById(req.params.id)

    if(!logotype){
        res.status(404)
        throw new Error("logotype with this id was not found")
    }

    const favorites = new Favorites({
        logoId: req.body.logoId
    })
    await favorites.save()
    res.status(201).json(favorites)

    } catch(error){
        res.status(500).json({ message: error.message})
    }

})

module.exports = {
    makeFavorite
}