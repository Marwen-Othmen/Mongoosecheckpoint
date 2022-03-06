const express = require('express')


const {personReg,findAll,findById,DeletePerson,UpdatePerson} = require('..personController/controllers/personController')
const Router = express.Router()

//@POST method

Router.post('/register',personReg)
//@GET method
Router.get("/",findAll);
Router.get("/id",findById);

//@PUT method

Router.get("/:id",UpdatePerson);

//@DELETE method

Router.get("/",DeletePerson);



module.exports = Router