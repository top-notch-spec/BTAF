// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve login.html when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve the contents of keygen.js
app.get('/keygen', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'keygen.js');

    // Read the file and respond with its contents
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // If there is an error reading the file, send an error response
            return res.status(500).send('Error reading the keygen.js file.');
        }

        // Send the contents of keygen.js file as the response
        res.type('text/javascript'); // Set the content type to JavaScript
        res.send(data);
    });
});


app.post('/', (req, res) => {
    const { email, password } = req.body;
    // Check if the email and password match the hardcoded values
    if (password === 'M9&xAq%4jT$hW2^nF') {
        // Authentication successful, send game.html
        res.sendFile(path.join(__dirname, 'public', 'game47.html'));
    } else {
        // Authentication failed, return login.html
        res.sendFile(path.join(__dirname, 'public', 'login-error.html'));
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});