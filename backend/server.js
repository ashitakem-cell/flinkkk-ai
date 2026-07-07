const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdf = require('pdf-parse'); // Yeh library wahi hai

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        
        // Yahan pdf(dataBuffer) ki jagah agar error aaye, toh ye try karo:
        const data = await pdf(dataBuffer);
        
        fs.unlinkSync(req.file.path); // File delete karo
        res.json({ success: true, text: data.text });
    } catch (err) {
        console.error("Parsing Error:", err);
        res.status(500).json({ message: "Parsing failed" });
    }
});

app.listen(5000, () => console.log('Backend running on 5000'));