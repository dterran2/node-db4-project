exports.seed = async function(knex) {
  await knex('steps').insert([
      {steps: 'Choose two pieces of bread'},
      {steps: 'Spread mayo or miracle whip on bread'},
      {steps: 'Spread PB on one piece of bread'},
      {steps: 'Spread jelly on one piece of bread'},
      {steps: 'Put two pieces and the contents in the middle together'},
      {steps: 'Put meat down on bottome slice'},
      {steps: 'Stack cheese on top of meat'},
      {steps: 'Stack onions on top of cheese'},
      {steps: 'Stack lettuce on top of interrios stack'},
      {steps: 'Stack baccon on top of tomatoes'},
      {steps: 'Stack tomatoes on top of bread'},

  ])
}