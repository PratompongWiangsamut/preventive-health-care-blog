const express = require("express");
const bodyParser = require("body-parser");
const API = require('./app/routes/index')
const db = require('./app/models/db')

const app = express();

db.sequelize.sync({force: false}).then(()=>{
  console.log('Drop and Resync: false')
})

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', API)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to preventive healt care blog." });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});