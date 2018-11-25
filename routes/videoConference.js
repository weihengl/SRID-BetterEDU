const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('videoConference');
});

router.get('/detail',(req,res)=>{
    res.render('videoConferenceDetails');
});

router.get('/join',(req,res)=>{
    res.render('joinVideoConference');
});

router.get('/setting',(req,res)=>{
    res.render('videoConferenceSetting');
});

module.exports = router;
