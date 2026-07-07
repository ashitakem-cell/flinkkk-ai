const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

// TRY THIS: Different import structure
const pdf = require('pdf-parse/lib/pdf-parse'); 

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        
        // Agar library function ki tarah call nahi ho rahi, 
        // to hum dataBuffer pass karenge
        const data = await pdf(dataBuffer);
        
        fs.unlinkSync(req.file.path);
        res.json({ success: true, text: data.text });
    } catch (err) {
        console.error("Critical Parsing Error:", err);
        res.status(500).json({ message: "Parsing failed: " + err.message });
    }
});

app.listen(5000, () => console.log('Backend running on 5000'));