const express=require('express');

const controller=require('../controllers/controller');
const authController=require('../controllers/authController');
const router=express.Router();

const app=express();

router.route('/').get(controller.homePage);
router.route('/signup').get(controller.signUpPage);
router.route('/login').get(controller.loginpage);

router.route('/signup').post(authController.signUpPage);
router.route('/login').post(authController.loginPage);

router.route('/logout').get(authController.logoutPage);

module.exports=router;