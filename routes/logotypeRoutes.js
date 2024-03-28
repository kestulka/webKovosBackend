const express = require("express")
const router = express.Router()
const {getLogotypes, generateLogotype} = require("../controllers/logotypeController")


router.get("/list", getLogotypes)
router.post("/new", generateLogotype)






module.exports = router