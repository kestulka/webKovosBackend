const express = require("express")
const router = express.Router()
const {getLogotypes, generateLogotype, getLogotype, deleteLogotype} = require("../controllers/logotypeController")


router.get("/list", getLogotypes)
router.post("/new", generateLogotype)
router.get("/:id", getLogotype)
router.delete("/:id/delete", deleteLogotype)





module.exports = router