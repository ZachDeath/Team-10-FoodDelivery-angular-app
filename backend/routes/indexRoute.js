// Router Index -- where all the other route pages are joined
const express = require('express');
const router = express.Router();
const path = require('path');
const userRouter = require(path.resolve('./') + '/routes/userRoutes.js');

router.route('/api').get(function (req, res) {
    res.json({ api: 'foodWebsite', version: 0 });
  });

router.use('/api/user', userRouter.router);

module.exports = { router };