const express = require('express')
  const app = express.Router()
  const db = require('../../models/db')
  const tag = db.tag

  // Create a new Tag
  app.post("/tag", (req, res)=>{
    tag.create({
      tid:req.body.tid,
      title: req.body.title
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Retrieve all Tag
 app.get("/Tag", (req, res)=>{
  tag.findAll().then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    res.status(500).send(err)
  })
 });
 

  // Retrieve a single Tag with TagId
  app.get("/tag/:tagId", (req, res)=>{
    tag.findOne({
      where: { tid: req.params.tagId }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Delete a Tag with TagId
  app.delete("/tag/:tagId",(req, res)=>{
    tag.destroy({
      where: { tid: req.params.tagId }
    }).then((data)=>{
      if(data == 1){
        res.status(200).send({message: "Delete success"})
      }else{
        res.status(404).send({message: "Tag not found"})
      }
    }).catch((err)=>{
      res.status(500).send(err)
    })
  } );

  // Update a Post with customerId 
  app.put("/tag/:tagId", (req, res)=>{
    tag.update({ rank: db.Sequelize.literal('rank + 1') },{
      where: { tid: req.params.tagId }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  module.exports = app