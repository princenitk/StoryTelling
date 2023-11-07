const express = require('express');
const passport = require('passport');
const router = express.Router(); // created object of Router class in express

// @desc Auth with Google
// @route  Get /auth/google

router.get('/google', passport.authenticate('google',{scope:['profile']}))

// @desc  Google auth callback
// @route  Get / auth/google/callback 

router.get('/google/callback', passport.authenticate('google',{failureRedirect:'/'}),  // if google auth using passport is successfull goto dashboard else the landing page
 (req,res)=>{
    res.redirect('/dashboard');
});

// @desc Logout User
// @route /auth/logout

router.get('/logout',(req,res)=>{
    req.logout((err) => {
        if (err) console.error(err);
        res.redirect('/');
    });
})




module.exports = router; 