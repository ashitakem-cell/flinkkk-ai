const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

// Stabilizing the import
const pdf = require('pdf-parse');

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file" });

    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        
        // Agar pdf(dataBuffer) error de raha hai, to hum ise explicitly call karenge
        // Check karte hain ki 'pdf' kya hai
        let data;
        if (typeof pdf === 'function') {
            data = await pdf(dataBuffer);
        } else if (pdf.default && typeof pdf.default === 'function') {
            data = await pdf.default(dataBuffer);
        } else {
            throw new Error("PDF library import structure issue");
        }
        
        fs.unlinkSync(req.file.path);
        res.json({ success: true, text: data.text });
    } catch (err) {
        console.error("Parsing Error:", err);
        res.status(500).json({ message: "Parsing failed: " + err.message });
    }
});

app.listen(5000, () => console.log('Server running on 5000'));