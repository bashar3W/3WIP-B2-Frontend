const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const posts = require("./posts.json");

app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((p) => p.id == id);
  res.send(post);
});

app.post("/posts", (req, res) => {
  const post = req.body;
  const postData = { id: posts.length + 1, ...post };
  posts.push(postData);
  res.send({"acknowledged": true})
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  posts.splice(id - 1, 1);
  res.send({"deleted": true})
});

app.put('/posts/:id', (req, res) =>{
  const id = req.params.id;
  const updatedPost = req.body;
  posts[id - 1] = updatedPost;
  res.send({"updated":true});
})

app.get("/", (req, res) => {
  res.send("RTK server is running");
});

app.listen(port, () => {
  console.log(`RTK app server listening on port ${port}`);
});

