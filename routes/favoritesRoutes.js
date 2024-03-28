const express = require("express")
const router = express.Router()
const {makeFavorite} = require("../controllers/favoritesController")


router.post("/:id/add", makeFavorite)




module.exports = router