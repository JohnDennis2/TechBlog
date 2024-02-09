const router = require('express').Router();
const userRoutes = require('./userController.js');
const blogRoutes = require('./blogController.js');

router.use('/users', userRoutes);
router.use('/posts', blogRoutes);

module.exports = router;
