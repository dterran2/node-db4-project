const express = require('express');
const welcomeRouter = require('./welcome/welcome-router')
const ingredientsRouter = require('./routers/ingredients')
const recipesRouter = require('./routers/recipes')
const stepsRouter = require('./routers/steps')


const server = express()

server.use(express.json())
server.use(welcomeRouter)
server.use(ingredientsRouter)
server.use(recipesRouter)
server.use(stepsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;