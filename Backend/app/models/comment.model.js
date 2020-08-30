const sql = require("./db.js");

//constructor
const Comment = function(comment) {
  this.pid = comment.pid;
  this.detail = comment.detail;
  this.uid = comment.uid;
};

Comment.create = (newComment, result) => {
  sql.query("INSERT INTO comment SET ?", newComment, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created comment: ", { id: res.insertId, ...newComment });
    result(null, { id: res.insertId, ...newPost });
  });
};

Comment.findById = (commentId, result) => {
  sql.query(`SELECT * FROM comment WHERE id = ${commentId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found comment: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Comment with the id
    result({ kind: "not_found" }, null);
  });
};

Comment.getAll = result => {
  sql.query("SELECT * FROM comment", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("post: ", res);
    result(null, res);
  });
};

Comment.remove = (id, result) => {
  sql.query("DELETE FROM comment WHERE id = ?", id, (err, res) => {
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

    console.log("deleted comment with id: ", id);
    result(null, res);
  });
};

Comment.updateById = (id, comment, result) => {
  sql.query(
    "UPDATE comment SET detail = ?, WHERE id = ?",
    [comment.detail, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Comment with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated comment post: ", { id: id, ...comment });
      result(null, { id: id, ...comment });
    }
  );
};

module.exports = Comment;