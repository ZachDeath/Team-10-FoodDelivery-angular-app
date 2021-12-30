// Router Index -- where all the other route pages are joined
const express = require('express');
const router = express.Router();
const path = require('path');
const userRouter = require(path.resolve('./') + '/routes/userRoutes.js');

// main route -- every route starts with 'localhost3000/api'
router.route('/api').get(function (req, res) {
    res.json({ api: 'foodWebsite', version: 0 });
  });

// secondary routes -- user queries will have 'localhost3000/api/user' 
// menu queries will have 'localhost3000/api/menu'and etc
router.use('/api/user', userRouter.router);

module.exports = { router };