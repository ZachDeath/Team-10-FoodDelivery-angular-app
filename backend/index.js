const express = require('express')
const app = express() //call to function returns app object
const port = process.env.PORT || 3000;
const path = require("path");

//setup the server-side routes 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// API Index Route
const indexRouter = require(path.resolve('./') + '/routes/indexRoute.js');
app.use(indexRouter.router);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
