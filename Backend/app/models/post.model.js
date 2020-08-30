const sql = require("./db.js");

//constructor
const Post = function(post) {
  this.title = post.title;
  this.tag = post.tag;
  this.tex = post.tex;
  this.belong = post.belong;
  this.rank = post.rank;
};

Post.create = (newPost, result) => {
  sql.query("INSERT INTO psot SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created post: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });
};

Post.findById = (postId, result) => {
  sql.query(`SELECT * FROM post WHERE id = ${postId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found post: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Post with the id
    result({ kind: "not_found" }, null);
  });
};

Post.getAll = result => {
  sql.query("SELECT * FROM post", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("post: ", res);
    result(null, res);
  });
};

Post.remove = (id, result) => {
  sql.query("DELETE FROM post WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found post with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted post with id: ", id);
    result(null, res);
  });
};

Post.updateById = (id, post, result) => {
  sql.query(
    "UPDATE post SET rank = ? WHERE id = ?",
    [post.rank, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Post with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated rank post: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

module.exports = Post;
