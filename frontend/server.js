//steps to create the server - programmatially
//nodjs - to import any module - require('module name')
//const http = require('http');


//create a server instance in memory
//const server = http.createServer((request, response)=>{

//    response.write('Hello from middleware server application');


//});

//associate a port numer and ask sever to listen
//server.listen(3000);

const express = require('express')
const bodyParser = require("body-parser");
const app = express()//call to function returns app object
const port = 3000

//setup the server-side routes 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

let posts = [
    {
        id:100,
        title: "post 1",
        body: "this is a test post"

    },
    {
        id:101,
        title: "post 2",
        body: "this is a test post 2"

    }]

//create a route to send JSON data to the client

// if request body contains JSON object, then parse the dataapp.use(bodyParser.json());
app.post("/api/posts", (req, res) => {
    let newpost = req.body;  console.log(newpost);  // postgres table  which will be added with new object  
  //res.status(201);  
  //res.send("Request from Post Http Method");  
  posts.push(newpost); 
  // add the new object to the array  
  res.status(201).send(newpost);});


app.post("/api/posts", (req, res) => {

  let newpost = req.body;

  console.log(newpost);



  // postgres table  which will be added with new object



  //res.status(201);

  //res.send("Request from Post Http Method");

  posts.push(newpost); // add the new object to the array

  res.status(201).send(newpost);

});



app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
