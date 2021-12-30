// Routing for the user queries
const express = require("express");
const router = express.Router();
const path = require("path");
const database = require(path.resolve(`./database.js`));


//Route and function to obtain all the users in the database
router.route("/getUsers").get(async function (req, res) {
  console.log("Getting Users...");
    database.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }
);

//Route and to obtain a single user by their ID
router.route("/getUserByID/:id").get(async function (req, res) {
  const id = req.params.id
  console.log("Getting User by ID...");
  database.query('SELECT * FROM users WHERE user_id = $1', [`${id}`] , function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    })
}
);

//Route to create a user for the database -- still in progress
// router.route("/createUser").post(async function (req, res) {
//   firstName = req.body.first_name ,
//   lastName = req.body.last_name ,
//   dateOfBirth = req.body.date_of_birth,
//   email = req.body.email_address ,
//   phoneNumber = req.body.mobile_number 
//   gender = req.body.gender , 
//   password = req.body.password 
//      try {
//        await database.query(
//          `INSERT into users(first_name, last_name, date_of_birth, email_address, mobile_number, gender, password) VALUES ($1, $2, $3, $4, $5, $6, $7)` , [firstName , `${lastName}`, `${dateOfBirth}`, `${email}`, `${phoneNumber}`, `${gender}`, `${password}`]
//        );
//          console.log("User created successfully")
//      } catch (err) {
//        console.error(err);
//        throw err;
//      }
//    }
//   );

module.exports = { router };
