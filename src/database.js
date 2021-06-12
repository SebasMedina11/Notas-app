const mongoose = require('mongoose')
//const {MONGODB_HOST,DATABASE_MONGO_NOTESAPP} = process.env
//const mongoURI = 'mongodb://${MONGODB_HOST}'/'+${$DATABASE_MONGO_NOTESAPP}'
mongoose.connect('mongodb://localhost/note-app', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('conexion establecida')).catch(err => console.log(err))