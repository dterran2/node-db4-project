const express = require("express")
const Steps = require("../models/steps")

const router = express.Router()

router.get('/steps', async (req, res, next) => {
    try {
        const steps = await Steps.find()
        res.json(steps)
    }catch(err) {
        next(err)
    }
})

router.get('/steps/:id', async (req, res, next) => {
    try{
        const steps = await Steps.findById(req.params.id)
        if(!steps) {
            return res.status(404).json({
                message: "Steps not found",
            })
        }
        res.json(steps)
    }catch(err) {
        next(err)
    }
})

router.post("/steps", async (req, res, next) => {
	try {
		const [id] = await Steps.find().insert(req.body)
		const user = await Steps.find().where({ id }).first()

		res.status(201).json(user)
	} catch(err) {
		next(err)
	}
})

module.exports = router