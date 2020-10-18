const express = require('express')
const app = express.Router()
const db = require('../../models/db')
const comment = db.comment

  // Create a new comment
  app.post("/comment", (req, res)=>{
    comment.create({
      detail: req.body.detail,
      pid:req.body.pid,
      uid:req.body.uid,
      rate:req.body.rate,
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Retrieve all comment
  app.get("/comment", (req, res)=>{
    comment.findAll().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
   });

   // Retrieve all comment that have same post
  app.get("/commentpid/:pid", (req, res)=>{
    comment.findAll({
      where: { pid: req.params.pid }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
   });

  // Retrieve a single comment with commentId
  app.get("/commentf/:pid", (req, res)=>{
    comment.findOne({
      where: { pid: req.params.pid }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Retrieve a single comment with commentId
  app.get("/recomment/:uid", (req, res)=>{
    comment.findOne({
      where: { uid: req.params.uid }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  // Delete a comment with commentId
  app.delete("/comment/:commentId", (req, res)=>{
    comment.destroy({
      where: { cid: req.params.commentId }
    }).then((data)=>{
      if(data == 1){
        res.status(200).send({message: "Delete success"})
      }else{
        res.status(404).send({message: "Comment not found"})
      }
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  //AVG rate
  app.get("/avg",(req,res)=>{
    comment.findAll({
      where:{pid:req.query.pid},
      attributes: ['pid', [db.sequelize.fn('AVG', 
      db.sequelize.col('rate')), 'ratingAvg']],
      group: ['pid'],
      order: [[db.sequelize.fn('AVG', db.sequelize.col('rate')), 'DESC']]
  }).then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    res.status(500).send(err)
  })
  })

  //AVG rate new
  app.get("/newavg",(req,res)=>{
    comment.findAll({
      limit: 2,
      where:{pid:req.query.pid},
      attributes: ['pid', [db.sequelize.fn('AVG', 
      db.sequelize.col('rate')), 'ratingAvg']],
      group: ['pid'],
      order: [[db.sequelize.fn('AVG', db.sequelize.col('createdAt')), 'DESC']]
  }).then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    res.status(500).send(err)
  })
  })

  // Update a comment with customerId
  app.put("/comment/:commentId", (req, res)=>{
    comment.update({ detail: db.Sequelize.literal('edit') },{
      where: { cid: req.params.userId }
    }).then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  });

  module.exports = app