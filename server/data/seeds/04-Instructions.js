
exports.seed = function(knex) {
      return knex('Instructions').insert([
        {Recipe_Id : '1', Instruction: 'Make the dough', Step_Number: 1},
        {Recipe_Id : '1', Instruction: 'Add cheese,tomatoes,peperoni', Step_Number:2},
        {Recipe_Id : '1', Instruction: 'Bake the pie', Step_Number:3},
        {Recipe_Id : '2', Instruction: 'Make the pasta', Step_Number:1},
      ]);
  
};
