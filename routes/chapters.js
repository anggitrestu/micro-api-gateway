const express = require('express');
const { route } = require('.');
const router = express.Router();
const chapterHandler = require('./handler/chapters');

router.post('/', chapterHandler.create);
router.put('/:id', chapterHandler.update);
router.delete('/:id', chapterHandler.destroy);
router.get('/:id', chapterHandler.get);
router.get('/', chapterHandler.getAll);

module.exports = router;
