const express = require('express');
const app = express();
const path = require('path');

// Set up middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.send('Homepage'); // Replace with rendering your homepage
});

// Route for handling user authentication (signup, login, logout)
app.use('/auth', require('./routes/authRoutes'));

// Route for handling blog related functionalities (viewing, creating, updating, deleting blog posts)
app.use('/blog', require('./routes/blogRoutes'));

// Route for handling dashboard related functionalities (viewing user's blog posts, creating new posts, updating, deleting posts)
app.use('/dashboard', require('./routes/dashboardRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});