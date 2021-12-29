// Routing for the user queries
const express = require("express");
const router = express.Router();
const path = require("path");
const userQueries = require(path.resolve(`./queries/userQueries.js`));

//Route to obtain all the users in the database
router.route("/getUsers").get( async function (req, res) {
  {
    const users = await userQueries.getUsers(req);
    console.log(users);
    res.json(users).status(200);
  }
});

module.exports = { router };