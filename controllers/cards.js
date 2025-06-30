const router = require("express").Router()
const card = require("../models/card")

router.post("/addcard", async (req, res) => {
    try {
        const { name, summary, monthlyIncome } = req.body
        const newCard = new card({name, summary, monthlyIncome })

        await newCard.save()
        res.status(200).json({
            data: newCard
        })

    } catch (err) {
        console.log(err)
    }
})

module.exports = router