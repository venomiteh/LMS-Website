const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        monthlyEarnings: 5000,
        annualEarnings: 60000,
        nb_users: 120,
        pendingRequests: 5,
        courses: [
            {
                id: 1,
                title: 'JavaScript Basics',
                description: 'Learn the basics of JavaScript programming.',
                teacher_name: 'John Doe',
                submission_date: '2023-11-18T14:30:00Z',
            },
            {
                id: 2,
                title: 'Advanced CSS',
                description: 'Master the art of modern CSS styling and animations.',
                teacher_name: 'Jane Smith',
                submission_date: '2023-11-18T10:00:00Z',
            },
        ],
        refunds: [
            {
                id: 1,
                course_title: 'JavaScript Basics',
                user_name: 'John Doe',
                reason: 'Course was not as described',
                request_date: '2023-11-18T14:30:00Z',
                amount: 50.0,
                status: 'Pending',
            },
            {
                id: 2,
                course_title: 'Advanced CSS',
                user_name: 'Jane Smith',
                reason: 'Accidental purchase',
                request_date: '2023-11-18T10:00:00Z',
                amount: 30.0,
                status: 'Pending',
            },
        ],
    });
});

module.exports = router;