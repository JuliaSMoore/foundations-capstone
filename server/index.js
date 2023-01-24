let express = require(`express`);
let app = express();
let cors = require ('cors')


const { getBooks, postAStory, getBook } = require("./controller.js");

app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/public`));

app.get("/api/books", getBooks);
app.get("/api/books/:id", getBook)
app.post("/api/books", postAStory);

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});
