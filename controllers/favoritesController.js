const Favorites = require("../models/Favorites")
const Logotype = require("../models/Logotype")
const asyncHandler = require("express-async-handler")

const makeFavorite = asyncHandler(async(req, res) => {

    const logotype = await Logotype.findById(req.params.id)

    if(!logotype){
        res.status(404)
        throw new Error("logotype with this id was not found")
    }

    const favorites = await Favorites.create({
        logoId: req.logotype._id
    })

    req.logoId.push(favorites._id)
    await req.logotype.save()

    res.status(201).json(logotype)
})

module.exports = {
    makeFavorite
}