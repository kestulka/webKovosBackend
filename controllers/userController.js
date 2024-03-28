const User = require("../models/User")
const asyncHandler = require("express-async-handler")

const loginUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && password) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
            message: "user sucessfully logged in!"
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
})

module.exports = {loginUser}

