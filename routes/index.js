const express = require('express');
const router = express.Router(); // created object of Router class in express
const {ensureAuth, ensureGuest} = require('../middleware/auth')


const Story = require('../models/Story')

// @desc Login/Landing page
// @route  Get /

router.get('/', ensureGuest, (req,res) =>{
    res.render('login', {
        layout : 'login',
    })
})

// @desc Dashboard
// @route  Get / dashboard 

router.get('/dashboard', ensureAuth, async(req,res)=>{
    try{
        const stories = await Story.find({user: req.user.id}).lean()
        res.render('dashboard', {
            name: req.user.firstName,
            stories,
        })
    }catch(err){
        console.error(err);
        res.render('error/500')
    } 
});

module.exports = router; 