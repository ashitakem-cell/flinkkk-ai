// backend/routes/recruitRoutes.js
const express = require('express');
const router = express.Router();

router.post('/upload-resume', (req, res) => {
    // Yahan hum resume process karenge
    console.log("Resume mil gaya!");
    res.json({ message: "Resume upload successful and under review by RecruitAI" });
});

module.exports = router;