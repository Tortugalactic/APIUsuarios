const express = require("express");

const router = express.Router();

//importar el userController
const userController = require("../controllers/userController");

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

module.exports = router;