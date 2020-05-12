const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js'); //TODO

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req,res)=>{
  res.status(200).json("You're in")
})

server.use('/api/cars', carsRouter);

module.exports = server;
