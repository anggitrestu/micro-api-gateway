const express = require('express');
const router = express.Router();
const courseHandler = require('./handler/courses');
const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permission');

router.post('/', verifyToken, can('admin'), courseHandler.create);
router.put('/:id', verifyToken, can('admin'), courseHandler.update);
router.delete('/:id', verifyToken, can('admin'), courseHandler.destroy);

router.get('/', courseHandler.getAll);
router.get('/:id', courseHandler.get);

module.exports = router;
