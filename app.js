require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");
const user = require("./models/user")

const app = express()
const PORT = process.env.PORT || 4000
const{dbconnect} = require("./db")

app.listen(PORT, () => {
	console.log(`[server] listening on ${PORT}`)
})


