const router = require("express").Router()
const card = require("../models/card")

router.post("/addcard", async (req, res) => {
    try {
        const { name, summary, monthlyIncome } = req.body
        const newCard = new card({ name, summary, monthlyIncome })

        await newCard.save()
        res.status(200).json({
            data: newCard
        })

    } catch (err) {
        console.log(err)
    }
})

router.get("/allcards", async (req, res) => {
    try {
        const allCards = await card.find()

        res.status(200).json({
            data: allCards
        })
    } catch(err) {
        console.log(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updated = await card.findByIdAndUpdate(id, {
            name: req.body.name ?? name,
            summary: req.body.summary ?? summary,
            monthlyIncome: req.body.monthlyIncome ?? monthlyIncome 

        })
        res.status(200).json({
            data: `Card updated`
        })


    } catch(err) {
        console.log(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteJob = await card.findByIdAndDelete(id)
        console.log(deleteJob)
        res.status(200).json({
            data: `job deleted`
        })
    } catch(err) {
        console.log(err)
    }
})

module.exports = router