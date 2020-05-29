
exports.seed = function(knex) {

      return knex('Ingredients').insert([
        {ingredient: 'Tomatoes'},
        {ingredient: 'Cheese'},
        {ingredient: 'Basil'},

      ]);
};
