const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.PORT || 7800;
const ejs = require('ejs');
const coursesRoutes = require('./routes/courses.js');
const libraryRoutes = require('./routes/library.js')
const profileRoutes = require('./routes/profile.js')
const authRoutes = require('./routes/auth.js')
const adminRoutes = require('./routes/admin.js')
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes for HTML pages
app.get('/home', (req, res) => {
    res.render('index');
});
app.get('/player',(req,res)=>{
    res.render('player.ejs')
})

app.use('/courses', coursesRoutes);
app.use('/user/library',libraryRoutes);
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes);
app.use('/admin',adminRoutes);


// 404 page for unmatched routes
app.use((req, res) => {
    res.status(404).render('404');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

