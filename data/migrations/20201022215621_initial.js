
exports.up = async function(knex) {
  await knex.schema.createTable("recipeTable"), (table) => {
    table.increments("id")
    table.text("recipeName").notNull()
  }

  await knex.schema.createTable("ingredientsList"), (table) => {
    table.increments("id")
    table.text("ingredientsList").notNull()
    table.text("quantity").notNull()
  }

  await knex.schema.createTable('steps'), (table) => {
    table.increments('id')
    table.text('steps').notNull()
  }

  await knex.schema.createTable('recipe_ingredients'), (table) => {
    table.increments('id')
    table.integer('recipeId').notNull().references('id').inTable('recipeTable')
    table.integer('ingredientsId').notNull().references('id').inTable('ingredientsList')
  }

  await knex.schema.createTable('recipe_steps'), (table) => {
    table.increments('id')
    table.integer('recipeId').notNull().references('id').inTable('recipeTable')
    table.integer('stepsId').notNull().references('id').inTable('steps')
  }

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_steps")
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredientsList")
    await knex.schema.dropTableIfExists("recipeTable")
};
