const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

// Import yahi rakho
const pdf = require('pdf-parse');

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file" });

    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        
        // YE LINE SABSE ZAROORI HAI: 
        // Agar pdf ek function nahi hai, toh uska 'default' property use karo
        const pdfFunction = (typeof pdf === 'function') ? pdf : pdf.default;
        
        if (!pdfFunction) {
            throw new Error("PDF library could not be initialized as a function");
        }

        const data = await pdfFunction(dataBuffer);
        
        fs.unlinkSync(req.file.path);
        res.json({ success: true, text: data.text });
    } catch (err) {
        console.error("DEBUG ERROR:", err);
        res.status(500).json({ message: "Parsing failed: " + err.message });
    }
});

app.listen(5000, () => console.log('Server running on 5000'));