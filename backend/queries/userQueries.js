const path = require("path");
const database = require(path.resolve(`./database.js`));

//function to obtain all the users in the database and sort them by id
async function getUsers() {
   await database.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      return JSON.stringify(results.rows)
    })
  }


module.exports = { getUsers }