const Comment = require("../models/comment.model.js");

// Create and Save a new Comment
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Comment
  const comment = new Post({
    forpost: req.body.forpost,
    detail: req.body.detail,
    from: req.body.from
  });

  // Save Comment in the database
  Comment.create(comment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment."
      });
    else res.send(data);
  });
};

// Retrieve all Post from the database.
exports.findAll = (req, res) => {
  Comment.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comment."
      });
    else res.send(data);
  });
};

// Find a single Comment with a commentId
exports.findOne = (req, res) => {
  Comment.findById(req.params.commentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Comment with id ${req.params.commentId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Comment with id " + req.params.commentId
        });
      }
    } else res.send(data);
  });
};

// Delete a Comment with the specified commentId in the request
exports.delete = (req, res) => {
  Comment.remove(req.params.commentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Comment with id ${req.params.commentId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Comment with id " + req.params.commentId
        });
      }
    } else res.send({ message: `Comment was deleted successfully!` });
  });
};

// Update a Comment identified by the commentId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Comment.updateById(
    req.params.commentId,
    new Comment(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Comment with id ${req.params.commentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Comment with id " + req.params.commentId
          });
        }
      } else res.send(data);
    }
  );
};