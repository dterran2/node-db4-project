
const db = require("../data/config")

function find() {
    return db('recipeTable')
}

function findById(id) {
    return db('recipeTable as r')
        .where('r.id', id)
}

module.exports = {
    find,
    findById,
}