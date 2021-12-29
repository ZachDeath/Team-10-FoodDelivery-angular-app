const path = require("path");
const database = require(path.resolve(`./database.js`));

//function to obtain all the users in the database and sort them by id
async function getUsers() {
  try {
    const users = await database.query(
      "SELECT * FROM users ORDER BY user_id ASC"
    );
    return users.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

//function to obtain a certain user by their user id
async function getUserByID(id) {
  try {
    const user = await database.query(
      `SELECT * FROM users WHERE user_id = $1`, [`${id}`]
    );
    return user.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = { getUsers, getUserByID };
