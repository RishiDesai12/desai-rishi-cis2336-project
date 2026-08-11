const express = require('express');
const router = express.Router();
const studentsArray = [];

router.get('/', (req, res) => {
    res.json(studentsArray);
});

router.post('/', (req, res) => {
    const { name, email, title, category, price } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    const newStudent = {
        id: studentsArray.length + 1,
        name: name,
        email: email,
        title: title,
        category: category,
        price: price,
        dateSubmitted: new Date()
    };

    studentsArray.push(newStudent);

    res.status(201).json({
        message: 'Success! The student record has been successfully submitted.',
        data: newStudent
    });
});

module.exports = router;