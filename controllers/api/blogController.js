const router = require('express').Router();
const { User,Post } = require('../../models');
// /api/posts
router.post('/', async (req, res) => {
  try {
    const postData = await Post.create(req.body); //({title: req.body.title, description: req.body.description})



      res.status(200).json(postData);
  
  } catch (err) {
    res.status(400).json(err);
  }
});





module.exports = router;
