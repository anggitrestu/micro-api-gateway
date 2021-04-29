const express = require('express');
const router = express.Router();
const myCourseHandler = require('./handler/my-courses');
router.post('/', myCourseHandler.create);
router.get('/', myCourseHandler.get);

module.exports = router;
