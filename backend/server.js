const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

// Yahan import structure change karke dekhte hain
const pdfParse = require('pdf-parse');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file" });

    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        
        // Yahan 'pdfParse' ko directly call karne ke bajaye check karein
        // Kai baar library 'default' property ke andar hoti hai
        const pdfFunction = typeof pdfParse === 'function' ? pdfParse : pdfParse.default;
        
        const data = await pdfFunction(dataBuffer);
        
        fs.unlinkSync(req.file.path);
        res.json({ success: true, text: data.text });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Parsing failed" });
    }
});

app.listen(5000, () => console.log('Server running on 5000'));