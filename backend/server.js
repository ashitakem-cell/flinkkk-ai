const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Ye enable karna zaroori hai taaki Frontend aur Backend baat kar sakein
app.use(express.json()); // JSON data handle karne ke liye

// Routes
app.get('/', (req, res) => {
    res.send("FLINKK AI Backend is Running 🚀");
});

// RecruitAI Route
app.post('/api/recruit/upload-resume', (req, res) => {
    console.log("Resume mil gaya!");
    res.json({ message: "Resume upload successful and under review by RecruitAI" });
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});