const express = require('express')
const app = express() //call to function returns app object
const port = process.env.PORT || 3000;
var cors = require('cors')
const path = require("path");

// for testing purposes cors is allowed for all requests
app.use(cors())
app.use(express.json());

//setup the server-side routes 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// API Index Route
const indexRouter = require(path.resolve('./') + '/routes/indexRoute.js',);
app.use(indexRouter.router);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
