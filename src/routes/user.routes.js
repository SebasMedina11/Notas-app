const {Router} = require('express')
const router = Router()
const {signUpForm,signUp,signInForm,logout,SignIn}=require('../controllers/user.controller')

router.get('/user/signup',signUpForm)
router.post('/signup',signUp)
router.get('/user/signin',signInForm)
router.get('/user/changePassword', changePassword)
router.post('/signin',SignIn)
router.get('/logout',logout)

module.exports = router