require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");
const user = require("./models/user")
const { dbConnect } = require("./db")

const jobsRoute = require("./controllers/jobs")
const cardRoute = require("./controllers/cards")

const app = express()
const PORT = process.env.PORT || 4000


const invoicesRoute =require("./controllers/invoices")

app.use(express.json())
app.use("/invoices", invoicesRoute)


app.use(express.json())
app.use("/jobs", jobsRoute)
app.use("/cards", cardRoute)

app.listen(PORT, () => {
	dbConnect()
	console.log(`[server] listening on ${PORT}`)
})


