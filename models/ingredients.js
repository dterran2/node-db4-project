
const db = require("../data/config")

function find() {
    return db('ingredientsList')
}

function findById(id) {
    return db('ingredientsList as i')
        .where('i.id', id)
}

module.exports = {
    find,
    findById,
}