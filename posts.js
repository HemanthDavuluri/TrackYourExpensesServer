const express = require("express");

const Post = require("./models/FormData");
const router = express.Router();

//Get data back from the server

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post data to the server

router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
