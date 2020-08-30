const express = require('express')
  const app = express.Router()
  const db = require('../../models/db')
  const user = db.user

  // Create a new Tag
  app.post("/user", (req, res)=>{
    user.create({
      name: req.body.name,
      email:req.body.email,
      password: req.body.password
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Retrieve all Tag
 app.get("/user", (req, res)=>{
  user.findAll().then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    res.status(500).send(err)
  })
 });
 

  // Retrieve a single Tag with TagId
  app.get("/user/:userId", (req, res)=>{
    user.findOne({
      where: { uid: req.params.userId }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Delete a Post with PostId
  app.delete("/user/:userId", (req, res)=>{
    user.destroy({
      where: { uid: req.params.userId }
    }).then((data)=>{
      if(data == 1){
        res.status(200).send({message: "Delete success"})
      }else{
        res.status(404).send({message: "User not found"})
      }
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Update a Post with customerId
  app.put("/user/:userId", (req, res)=>{
    user.update({ role: db.Sequelize.literal('test') },{
      where: { uid: req.params.userId }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  module.exports = app