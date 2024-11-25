const express = require("express");
const router = express.Router();


const courses = [
    {
        image: 'course-1.jpg',
        title: 'Build Responsive Real-World Websites with HTML and CSS',
        level: 'Beginner',
        ratingStars: '⭐⭐⭐⭐⭐',
        rating: 5.0,
        price: 29.00,
        lessons: 8,
        students: 20,
        duration: 3,
        link: '#'
    },
    {
        image: 'course-2.jpg',
        title: 'Java Programming Masterclass for Software Developers',
        level: 'Advanced',
        ratingStars: '⭐⭐⭐⭐',
        rating: 4.5,
        price: 49.00,
        lessons: 15,
        students: 35,
        duration: 8,
        link: '#'
    },
    
];


router.get('/', (req, res) => {
    res.render('courses', { courses });
});

module.exports = router;