const express=require('express');
const db=require('../knexfile-config');

function getRecipes(){
   return  db('Recipes')
}

function getShoppingList(id){
    if(id){
        return db('Recipes_Book as RB')
    .select('Ingredient','Quantity')
    .join('Ingredients as I', 'RB.Ingredient_Id', 'I.id')
    .where('Recipe_id', id)
    } else {
        return null
    }
 
}

function getInstructions(id){
    if(id){
        return db('Instructions as I')
        .select('Instruction','Step_Number')
        .join('Recipes as R', 'R.id','I.Recipe_Id')
        .where('Recipe_Id', id)
        .orderBy('I.Step_Number')
    } else{
        return null
    }
}


module.exports={
    getRecipes,
    getShoppingList,
    getInstructions

}