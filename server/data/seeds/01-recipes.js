
exports.seed = function(knex) {

      return knex('Recipes').insert([
        { Recipe_Name: 'Pizza'},
        {Recipe_Name: 'Spaghetti'},
        {Recipe_Name: 'Mozzarella CheeseSticks'}
      ]);
};
