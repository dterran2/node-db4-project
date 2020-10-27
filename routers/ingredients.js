const express = require("express")
const Ingredients = require("../models/ingredients")

const router = express.Router()

router.get('/ingredients', async (req, res, next) => {
    try {
        const ingredients = await Ingredients.find()
        res.json(ingredients)
    }catch(err) {
        next(err)
    }
})

router.get('/ingredients/:id', async (req, res, next) => {
    try{
        const ingredients = await Ingredients.findById(req.params.id)
        if(!ingredients) {
            return res.status(404).json({
                message: "Ingredients not found",
            })
        }
        res.json(ingredients)
    }catch(err) {
        next(err)
    }
})

router.post("/ingredients", async (req, res, next) => {
	try {
		const [id] = await Ingredients.find().insert(req.body)
		const user = await Ingredients.find().where({ id }).first()

		res.status(201).json(user)
	} catch(err) {
		next(err)
	}
})

module.exports = router