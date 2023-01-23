let express = require(`express`);
let app = express();
let cors = require ('cors')


const { getBooks, postAStory } = require("./controller.js");

app.use(cors())
app.use(express.static(`${__dirname}/public`));

app.get("/api/books", getBooks);
app.post("/api/books", postAStory);

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});
