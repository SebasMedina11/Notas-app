require('dotenv').config()
const app = require('./src/server')
require('./src/database') 


app.listen(app.get('port'),()=>{
	console.log('3000')
}) 