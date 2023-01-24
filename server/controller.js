const bookDB = require("./db.json");
let id = 8;

module.exports = {
  getBooks: (req, res) => {
    const {searchBook, fantasyTag, siFiTag, romanceTag} = req.query
    if(!(searchBook || fantasyTag || siFiTag || romanceTag)) {
        res.send(bookDB)
        return
    }

    let filteredBookDB = bookDB.filter((book) => {
        return book.title.toLowerCase().includes(searchBook.toLowerCase())
    })
    if (romanceTag === "true") {
        filteredBookDB = filteredBookDB.filter((book) => {
            return book.tags.includes("Romance")        
        })
    }

    if (fantasyTag === "true") {
        filteredBookDB = filteredBookDB.filter((book) => {
            return book.tags.includes("Fantasy")        
        })
    }

    if (siFiTag === "true") {
        filteredBookDB = filteredBookDB.filter((book) => {
            return book.tags.includes("Si-Fi")        
        })
    }

    res.send(filteredBookDB)
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

    let bookId = newStory.id
    bookDB.push(newStory);
    res.status(200).send({id: bookId});
  },

  getBook: (req, res) => {
    const {id} = req.params
    let index
    console.log(id)
    for (let i = 0; i < bookDB.length; i++) {
      if (bookDB[i].id === +id) {
        index = i
      }
    }

    if (index) {
      res.status(200).send(bookDB[index])
    } else {
      res.sendStatus(400)
    }
  }
};
