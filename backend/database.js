const { Pool } = require('pg')

const database = new Pool({
  user: 'postgres',
  host:  'localhost',
  database:  'foodWebsite',
  password: 'root',
  port: 5432,
})

database.connect()

module.exports = database
