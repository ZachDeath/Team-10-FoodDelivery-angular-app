const { Pool } = require('pg')

// connection to the database
const database = new Pool({
  user: 'postgres',
  host:  'localhost',
  database:  'foodWebsite',
  password: 'root',
  port: 5432,
})

database.connect()

module.exports = database
