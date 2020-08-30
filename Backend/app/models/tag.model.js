const sql = require("./db.js");

//constructor
const Tag = function(tag) {
  this.title = tag.title;
  
};

Tag.create = (newTag, result) => {
  sql.query("INSERT INTO tag SET ?", newTag, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tag: ", { id: res.insertId, ...newTag });
    result(null, { id: res.insertId, ...newTag });
  });
};

Tag.findById = (tagId, result) => {
  sql.query(`SELECT * FROM tag WHERE id = ${tagId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tag: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tag with the id
    result({ kind: "not_found" }, null);
  });
};

Tag.getAll = result => {
  sql.query("SELECT * FROM tag", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tag: ", res);
    result(null, res);
  });
};

Tag.remove = (id, result) => {
  sql.query("DELETE FROM tag WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found tag with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tag with id: ", id);
    result(null, res);
  });
};

Tag.updateById = (id, tag, result) => {
  sql.query(
    "UPDATE tag SET title = ? WHERE id = ?",
    [tag.title, id],
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

      console.log("updated tag title: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

module.exports = Tag;
