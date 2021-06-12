const {Router} = require('express')
const router = Router()
const {renderNoteForm, 
	 newNote,
	 showNotes,editNotes,
	 updateNote,
	 deleteNote} = require('../controllers/note.controller')

//render form note add
router.get('/product/add', renderNoteForm)
router.post('/product/new', newNote)
router.get('/products',showNotes)
router.get('/product/edit/:id',editNotes)
router.put('/product/edit/:id',updateNote)
router.delete('/product/delete/:id',deleteNote)

module.exports = router
