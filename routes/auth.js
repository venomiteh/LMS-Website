const express = require('express');
const router = express.Router();
const db = require('../utils/database')


router.get('/',(req,res)=>{
    res.render('login.ejs')
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login Data:', { email, password });
 res.redirect('/home')
    
    
});
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    db.execute('INSERT INTO users (username,email,password values(?,?,?)',[name,email,password] )
   .then((result)=>res.redirect('/home'))
   
   .catch((error) =>
    res.status(500).send({ success: false, message: "Something Went Wrong!" }))

});

module.exports = router;