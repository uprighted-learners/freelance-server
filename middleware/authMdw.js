const jwt = require('jsonwebtoken')
const User = require("../models/user")
const JWT_KEY = process.env.JWT_KEY

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) throw new Error("No token provided")

        const decoded = jwt.verify(token,JWT_KEY)
        const user = await User.findbyId(decoded._id)

        if (!User) throw new Error("User not found")

        req.user = user;
        next()
    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: `${err}`
        })
    }
}

    const isAuthorized = (req, res, next) => {
        if (!req.user) throw new Error("Unatuthorized")
        next()
    }

    module.exports = { authenticate, isAuthorized}