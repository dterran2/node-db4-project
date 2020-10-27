const express = require("express")
const Recipes = require("../models/recipes")

const router = express.Router()

router.get('/recipes', async (req, res, next) => {
    try {
        const recipes = await Recipes.find()
        res.json(recipes)
    }catch(err) {
        next(err)
    }
})

router.get('/recipes/:id', async (req, res, next) => {
    try{
        const recipes = await Recipes.findById(req.params.id)
        if(!recipes) {
            return res.status(404).json({
                message: "Recipes not found",
            })
        }
        res.json(recipes)
    }catch(err) {
        next(err)
    }
})

router.post("/recipes", async (req, res, next) => {
	try {
		const [id] = await Recipes.find().insert(req.body)
		const user = await Recipes.find().where({ id }).first()

		res.status(201).json(user)
	} catch(err) {
		next(err)
	}
})

module.exports = router