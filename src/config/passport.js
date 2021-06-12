const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const User=require('../models/user')

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField:'password',

},async (email,password,done)=>{
	//match email
	const user = await User.findOne({email})
	if(!user){
		return done(null,false,{message:'No found'})
	}else{
		//match password
	
	}

}))

passport.serializeUser((user,done)=>{
	done(null,user,id)
})
passport.deserializeUser((ide,done)=>{
	User.findById(id,(err,user)=>{
		done(err,user)

	})
})