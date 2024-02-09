const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({})
const post = postData.map(post => post.get ({plain : true}))
console.log(post)
    // Pass serialized data and session flag into template
    res.render('home.handlebars', {post});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const userData = await User.findOne({
        where: {id: req.session.user_id}
      })
      console.log(userData)

      const user = userData.get({plain:true})
      //const user = userData.map(user => user.get({plain: true}))
      console.log(user)
      // Pass serialized data and session flag into template
      res.render('dashboard.handlebars', {user});
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/login', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    

    // Pass serialized data and session flag into template
    res.render('login.handlebars');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogpost', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    

    // Pass serialized data and session flag into template
    res.render('blogpost');
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;