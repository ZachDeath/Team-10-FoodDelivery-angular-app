const { Pool } = require('pg')

// connection to the database
const database = new Pool({
  user: 'postgres',
  host:  '34.142.80.20',
  database:  'postgres',
  password: 'root',
  port: 5432,
})

database.connect()

module.exports = database
