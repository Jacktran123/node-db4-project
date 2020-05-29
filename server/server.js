const express=require('express');
const helmet=require('helmet');
const morgan=require('morgan');
const RecipeApi=require('./api/Recipe-api');

const server=express();


server.use(express.json());
server.use(morgan());
server.use(helmet());  
server.use('/api/', RecipeApi);




module.exports=server;