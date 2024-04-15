const express = require("express");
const { auth } = require('../middlewares/utlis.js')

const { getAllUsers, getUserById } = require("../controllers/users.controller.js");

const router = express.Router();

// router.get("/", getAllUsers);
router.get("/", auth, getAllUsers);
router.get('/:id', getUserById)

module.exports = router;
