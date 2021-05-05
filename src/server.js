const express = require('express')
const app = express()
const path = require('path')
const hbs = require('express-handlebars')
const morgan = require('morgan')
const method=require('method-override')
const flash=require('connect-flash')
const session = require('express-session')


//settings
app.set('port', process.env.PORT || 3000)
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs', hbs ({
	defaultLayout: 'main',
	layoutsDir : path.join(app.get('views'),'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname:'.hbs'
}))

app.set('view engine','.hbs')
//middlewares
app.use(express.urlencoded({extended : false}))
app.use(morgan('dev'))
app.use(method('_method'))
app.use(session({
	secret: 'secret',
	resave :true,
	saveUninitialized: true
}))
app.use(flash())
//global variables
app.use((req,res,next)=>{
	res.locals.success_mesg=req.flash('success_mesg')
	res.locals.error_mesg=req.flash('error_mesg')
	next()
})
//routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/note.routes'))
app.use(require('./routes/user.routes'))
//static files
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app