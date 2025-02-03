// Express server example
const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js"); 
router.post('/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content, createdAt: new Date() });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
});



router.get('/blogs', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
