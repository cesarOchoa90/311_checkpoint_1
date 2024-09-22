/// looks like the const express line is only written in the index and routers but doesnt go in the controllers

const express = require('express')
const router = express.Router()

//not sure if i need to have users here
const users = require("../data/index")
const usersController = require("../controllers/users")



//CODE
router.get("/users", usersController.listUsers);
router.get("/users/:id", usersController.showUser);
router.post("/users", usersController.createUser);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser)


module.exports = router