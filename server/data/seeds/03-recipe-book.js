
exports.seed = function(knex) {

      return knex('Recipes_Book').insert([
          {Recipe_Id: 1, Ingredient_Id: 1, Quantity: '4lbs'},
          {Recipe_Id: 1, Ingredient_Id: 2, Quantity: '0.2oz'},
          {Recipe_Id: 1, Ingredient_Id: 3, Quantity: '1lbs'},
          {Recipe_Id: 2, Ingredient_Id: 1, Quantity: '3oz'},
      ]);
    
};
