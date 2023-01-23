const bookDB = require("./db.json");
let id = 8;

module.exports = {
  getBooks: (req, res) => {
    res.send(bookDB);
  },

  postAStory: (req, res) => {
    let obj = req.body;
    let newStory = {
      id: id,
      title: obj.title,
      description: obj.description,
      tags: obj.tags,
      cover: obj.cover,
      content: obj.content,
    };
    id++;

    bookDB.push(newStory);
    res.send(bookDB);
  },
};
