exports.seed = async function(knex) {
  await knex('recipeTable').insert([
      {recipeName: 'Pb& Jelly'},
      {recipeName: 'BLT sandwhich'},
      

  ])
}