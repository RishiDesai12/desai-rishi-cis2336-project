const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const artworkSubmissions = [];
app.get('/', (req, res) => {
    res.send('ArtConnect Backend is live!');
});

app.get('/api/artworks', (req, res) => {
    res.json(artworkSubmissions);
});

app.post('/api/submit', (req, res) => {
    // Extract the data sent from the frontend form
    const { artistName, email, title, category } = req.body;

    // Validate that data was actually received
    if (!artistName || !email || !title || !category) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    const newSubmission = {
        id: artworkSubmissions.length + 1,
        artistName,
        email,
        title,
        category,
        dateSubmitted: new Date()
    };
    artworkSubmissions.push(newSubmission);
    res.status(201).json({
        message: `Success! "${title}" by ${artistName} has been successfully submitted.`,
        data: newSubmission
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});