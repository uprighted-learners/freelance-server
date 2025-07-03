require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors")


const jobsRoute = require("./controllers/jobs")
const cardRoute = require("./controllers/cards")
const authRoute = require("./controllers/auth")

const app = express()
const PORT = process.env.PORT || 4000


const invoicesRoute =require("./controllers/invoices")

app.use(cors())
app.use(express.json())
app.use("/invoices", invoicesRoute)


app.use("/auth", authRoute);




app.use(express.json())
app.use("/jobs", jobsRoute)
app.use("/cards", cardRoute)

app.listen(PORT, () => {
	dbConnect()
	console.log(`[server] listening on ${PORT}`)
})


