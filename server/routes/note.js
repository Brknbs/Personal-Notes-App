const express = require('express');
const router = express.Router();

const noteController = require('../controllers/note');

router.route('/')
  .get(noteController.getAllNotes)
  .post(noteController.postNote);

  router.route('/:noteId')
    .get(noteController.getNoteById)
    .post(noteController.updateNote)
    .delete(noteController.deleteNote);

    module.exports = router;