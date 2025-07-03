const router = require("express").Router()
const Job = require("../models/job")


router.get("/alljobs", async (req, res) => {
    try {
        const allJobs = await Job.find()
        console.log(allJobs)
        res.status(200).json(allJobs)
        

    } catch(err) {
        console.log(err)
    }
})

router.post("/addjob", async (req, res) => {
    try {
        const { name, job, description, salary, jobStatus } = req.body

        const newJob = new Job({ name, job, description, salary, jobStatus })

        await newJob.save()

        res.status(200).json({
            message: `Job created!`,
            data: newJob
        })

    } catch (err) {
        console.log(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const updated = await Job.findByIdAndUpdate(id, {
            job: req.body.job ?? job,
            description: req.body.description ?? description,
            salary: req.body.salary ?? salary
        })

        res.status(200).json({
            data: updated
        })
    } catch(err) {
        console.log(err)
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteJob = await Job.findByIdAndDelete(id)
        console.log(deleteJob)
        res.status(200).json({
            message: `Job deleted`
        })
    } catch(err) {
        console.log(err)
    }
})

module.exports = router