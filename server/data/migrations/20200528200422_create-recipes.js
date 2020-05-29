exports.up = function (knex) {
   return (
       knex.schema.createTable('Recipes', tbl=>{
       tbl.increments('id');
       tbl.text('Recipe_Name',250).notNullable().unique();
    })
    .createTable('Ingredients', tbl=>{
        tbl.increments('id');
        tbl.text('Ingredient',250).notNullable().unique();
    })
    .createTable('Recipes_Book', tbl=>{
        tbl.integer('Recipe_Id',14)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('Ingredient_Id',14)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.text('Quantity',13)
        .unsigned()
        .notNullable()
    })
    .createTable('Instructions',tbl=>{
        tbl.increments('id');
        tbl.integer('Recipe_Id',3)
        .notNullable()
        .unsigned()
        .references('Recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.text('Instruction',123).notNullable()
        tbl.integer('Step_Number',12)
        .notNullable()
    })
   );
};
  
exports.down = function (knex) {
   return knex.schema
   .dropTableIfExists('Instructions')
   .dropTableIfExists('Recipes_Book')
   .dropTableIfExists('Ingredients')
   .dropTableIfExists('Recipes')
};
