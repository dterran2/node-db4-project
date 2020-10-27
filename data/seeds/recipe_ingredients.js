exports.seed = async function(knex) {
  await knex('recipe_ingredients').insert([
      {recipeId: 1, ingredientsId: 1},
      {recipeId: 1, ingredientsId: 2},
      {recipeId: 1, ingredientsId: 3},
      {recipeId: 1, ingredientsId: 4},
      {recipeId: 1, ingredientsId: 5},
      {recipeId: 2, ingredientsId: 1},
      {recipeId: 2, ingredientsId: 2},

  ])
}