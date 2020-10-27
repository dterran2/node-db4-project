exports.seed = async function(knex) {
  await knex('recipe_steps').insert([
      {recipeId: 1, stepsId: 1},
      {recipeId: 1, stepsId: 3},
      {recipeId: 1, stepsId: 4},
      {recipeId: 1, stepsId: 5},
      {recipeId: 2, stepsId: 1},
      {recipeId: 2, stepsId: 2},
      {recipeId: 2, stepsId: 10},
      {recipeId: 2, stepsId: 9},
      {recipeId: 2, stepsId: 8},
      {recipeId: 2, stepsId: 5},

  ])
}