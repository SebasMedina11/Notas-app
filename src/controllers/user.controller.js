const userCtrl = {}
const User = require('../models/user')

userCtrl.signUpForm=(req,res)=>{
	res.render('user/signUp')
}
userCtrl.signUp=async (req,res)=>{
	const errors=[]
	const {name,email,password,confirm_password}=req.body
	if(password != confirm_password){
		errors.push({text:'password not match'})
	}
	if(password.length<4){
		errors.push({text:'invalid password'})
	}
	if(errors.length > 0){
		res.render('user/signup',{errors,name,email,password})
	}else{
		const emailUser=await User.findOne({email:email})
		if(emailUser){
			req.flash('error_mesg','email used')
			res.redirect('/user/signup')
		}else{
			const newUser=new User({name,email,password})
			newUser.password = await newUser.encryptPassword(password)
			await newUser.save()
			req.flash('success_mesg','registered')
			res.redirect('/user/signin')
		}
	}
}
userCtrl.signInForm=(req,res)=>{
	res.render('user/signIn')
}
userCtrl.SignIn= (req,res)=>{
	res.send('send')
}
userCtrl.logout =(req,res)=>{
	res.send('logout')
}
module.exports = userCtrl