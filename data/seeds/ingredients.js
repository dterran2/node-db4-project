exports.seed = async function(knex) {
    await knex('ingredientsList').insert([
        {ingredientsList: 'bread', quantity: '1'},
        {ingredientsList: 'Pb', quantity: '2'},
        {ingredientsList: 'jelly', quantity: '3'},
        {ingredientsList: 'tomatoes', quantity: '4'},
        {ingredientsList: 'lettuce', quantity: '5'},
        {ingredientsList: 'bacon', quantity: '1'},
        {ingredientsList: 'mayo', quantity: '2'},

    ])
}