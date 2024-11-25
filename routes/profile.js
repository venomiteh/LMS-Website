const express = require('express');
const router = express.Router();

const user = {
    id: 12345,
    profilePicture: null,
    username: "Its_Venomite",
    joinedDate: "2022-02-25",
    location: "Global",
    gender: "male",
    email: "ven@example.com",
    bio: "This is a sample bio.",
    stats: {
        continuousWriting: "0d",
        readingHours: "989.7h",
        booksRead: 5767
    }}

    router.get('/',(req,res)=>{
        res.render('profile.ejs',{user})
    })

module.exports = router;
