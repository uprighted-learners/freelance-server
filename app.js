require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const { dbConnect } = require("./db")

const jobsRoute = require("./controllers/jobs")
const cardRoute = require("./controllers/cards")

app.use(express.json())
app.use("/jobs", jobsRoute)
app.use("/cards", cardRoute)

app.listen(PORT, () => {
	dbConnect()
	console.log(`[server] listening on ${PORT}`)
})