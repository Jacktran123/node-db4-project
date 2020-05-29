const express=require('express');
const User=require('./db-helper-methods');

const router=express.Router();

router.get('/',(req,res)=>{
    User.getRecipes()
    .then(recipe=> res.status(200).json(recipe))
    .catch(err=> res.status(500).json({message: 'Internal Server Error'}))
})

router.get('/:id', (req,res)=>{
    const {id} =req.params;

    User.getShoppingList(id)
    .then(shoppingList=> {
        if(shoppingList){
            res.status(200).json(shoppingList)
        } else{
            res.status(404).json({message: `Could not find that Id in our database`})
        }
        })
    .catch(err=> res.status(500).json({message: 'Internal Server Error'}))
})

router.get('/instructions/:id', (req,res)=>{
    const id= req.params.id;

    User.getInstructions(id)
    .then(ins=>{
        if(ins){
            return res.status(200).json(ins)
        } else{
            return res.status(404).json({error: 'Please provide a valid Id'})
        }
    
    })
    .catch(err=> res.status(500).json({err:'Internal Server Error'}))
})

module.exports=router;