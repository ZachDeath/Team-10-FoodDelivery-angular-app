// Routing for the user queries
const express = require("express");
const router = express.Router();
const path = require("path");
const userQueries = require(path.resolve(`./queries/userQueries.js`));

//Route to obtain all the users in the database
router.route("/getUsers").get( async function (req, res) {
  console.log("Getting Users...");  
  const users = await userQueries.getUsers(req.body);
  res.json(users).status(200);
});

//Route to obtain a single user by their ID
router.route("/getUserByID/:id").get( async function (req, res) {
  console.log("Getting User by ID...");  
  const users = await userQueries.getUserByID(req.params.id);
  res.json(users).status(200);
});

module.exports = { router };