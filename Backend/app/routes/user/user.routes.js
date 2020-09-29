const express = require('express')
const app = express.Router()
const db = require('../../models/db')
const user = db.user
const role = 

// Create a new Tag
app.post("/user", (req, res) => {
  user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  }).then((data) => {
    res.status(200).send(data)
  }).catch((err) => {
    res.status(500).send(err)
  })
});

// Retrieve all Tag
app.get("/user", (req, res) => {
  user.findAll().then((data) => {
    res.status(200).send(data)
  }).catch((err) => {
    res.status(500).send(err)
  })
});

// login
app.get("/login", (req, res) => {
  user.findOne({
    where: { name: req.query.name, password: req.query.password }
  }).then((data) => {
    if (data) {
      res.status(200).send(data)
    } else {
      res.status(404).send({ message: 'not found' })
    }

  }).catch((err) => {
    console.log(err)
    res.status(500).send(err)
  })
});

//retrieve all user that same role
app.get("/userrole/:role", (req, res) => {
  user.findAll(
    {
      where: { role: req.params.role }
    }
  ).then((data) => {
    res.status(200).send(data)
  }).catch((err) => {
    res.status(500).send(err)
  })
});

// Update a user to admin
app.put("/userupdaterole", (req, res) => {
  user.findOne({
    where: { uid: req.body.uid }
  }).then((data) => {
    data.update({
      role: 2
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err) => {
      res.status(500).send(err)
    })
  }).catch((err) => {
    console.log(err)
    res.status(500).send(err)
  })
});

// Update a admin to user
app.put("/deleteadmin", (req, res) => {
  user.findOne({
    where: { uid: req.body.uid }
  }).then((data) => {
    data.update({
      role: 1
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err) => {
      res.status(500).send(err)
    })
  }).catch((err) => {
    console.log(err)
    res.status(500).send(err)
  })
});

// Retrieve a single Tag with TagId
app.get("/user/:userId", (req, res) => {
  user.findOne({
    where: { uid: req.params.userId }
  }).then((data) => {
    res.status(200).send(data)
  }).catch((err) => {
    res.status(500).send(err)
  })
});

// Delete a Post with PostId
app.delete("/user/:userId", (req, res) => {
  user.destroy({
    where: { uid: req.params.userId }
  }).then((data) => {
    if (data == 1) {
      res.status(200).send({ message: "Delete success" })
    } else {
      res.status(404).send({ message: "User not found" })
    }
  }).catch((err) => {
    res.status(500).send(err)
  })
});



module.exports = app