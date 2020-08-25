module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Post
  app.post("/post", post.create);

  // Retrieve all Post
  app.get("/post", post.findAll);

  // Retrieve a single Post with PostId
  app.get("/post/:customerId", post.findOne);

  // Delete a Post with PostId
  app.delete("/post/:postId", post.delete);

  
};