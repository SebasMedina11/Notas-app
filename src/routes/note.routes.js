const {Router} = require('express')
const router = Router()
const {renderNoteForm, 
	 newNote,
	 showNotes,editNotes,
	 updateNote,
	 deleteNote} = require('../controllers/note.controller')

//render form note add
router.get('/notes/add', renderNoteForm)
router.post('/notes/new', newNote)
router.get('/notes',showNotes)
router.get('/notes/edit/:id',editNotes)
router.put('/note/edit/:id',updateNote)
router.delete('/note/delete/:id',deleteNote)

module.exports = router
