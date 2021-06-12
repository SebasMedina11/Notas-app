const notesCtrl = {}
const Note = require('../models/note')

notesCtrl.renderNoteForm =(req,res)=>{
	res.render('./notes/new-note')
}
notesCtrl.newNote = async (req,res)=>{
	const {title,description}=req.body
	const newNote=new Note({title, description})
	await newNote.save()
	req.flash('success_mesg','product added successfully')
	res.redirect('/products')
}
notesCtrl.showNotes = async (req,res)=>{
	const notesArray = await Note.find().lean()
	res.render('notes/all-notes', {notesArray})
}
notesCtrl.editNotes = async (req,res)=>{
	const noteInf = await Note.findById(req.params.id).lean()
	res.render('notes/edit-note',{noteInf})
}
notesCtrl.updateNote = async(req,res)=>{
	const {title,description}=req.body;
	console.log({title,description})
	await Note.findByIdAndUpdate(req.params.id, {title,description})
	req.flash('success_mesg','product update successfully')
	res.redirect('/products')
}
notesCtrl.deleteNote = async (req,res)=>{
	await Note.findByIdAndDelete(req.params.id)
	req.flash('success_mesg','product delete successfully')
	res.redirect('/products')
}

module.exports =notesCtrl