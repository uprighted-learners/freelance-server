const router = require("express").Router()

const Invoice = require("../models/invoice")

router.get("/", async (req,res) => {
    try {
        const allInvoices = await Invoice.find({})

        res.status(200).json(allInvoices)
    } catch(err) {
        console.log(err)
        res.status(500).json({
            error: `${err}`
        })
    }
});

router.post("/create", async (req,res) => {
    try {
        const { status, date, amount, message} = req.body

        const newInvoice = new Invoice({ status, date, amount, message })
        await newInvoice.save();

        res.status(201).json({
            message: `Invoice created`,
            data: newInvoice
        })

    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: `${err}`
        })
    }
});

router.put("/:id", async (req,res) => {
    try {
        const { status, date, amount, message} = req.body;

        const invoiceId = req.params.id;

        const updatedInvoice = await Invoice.findByIdAndUpdate(invoiceId, {
            status: status ?? undefined,
            date: date ?? undefined,
            amount: amount ?? undefined,
            message: message ?? undefined,
        }, {new: true});

        if (!updatedInvoice) {
            return res.status(404).json({
                error: "Invoice not found"
            });
        };

        res.status(200).json({
            message: "Invoice updated successfully",
            data: updatedInvoice
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: `${err}`
    })
    }}
)

router.delete("/:id", async (req,res) => {
    try {
        const invoiceId = req.params.id;

        const deletedInvoice = await Invoice.findByIdAndDelete(invoiceId)

        if(!deletedInvoice) {
            return res.status(404).json({
                error: "Invoice not found"
            })
        }

        res.status(200).json({
            message: "Invoice deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: `${err}`
        })
    }
})

module.exports = router