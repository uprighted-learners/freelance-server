require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const { dbConnect } = require("./db")

const invoicesRoute =require("./controllers/invoices")

app.use(express.json())
app.use("/invoices", invoicesRoute)

app.listen(PORT, () => {
	dbConnect()
	console.log(`[server] listening on ${PORT}`)
})