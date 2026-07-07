const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

// Library ko aise require karo
const pdfParseLib = require('pdf-parse');

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        
        // Yahan 'pdf-parse' ka structure check karte hue call karo
        // Tumhare output mein 'PDFParse' class dikh rahi hai
        const data = await pdfParse(dataBuffer); 
        
        fs.unlinkSync(req.file.path);
        res.json({ success: true, text: data.text });
    } catch (err) {
        // Agar fir bhi error aaye, to PDFParse class ko manually try karenge
        try {
            const data = await new pdfParse.PDFParse(fs.readFileSync(req.file.path));
            fs.unlinkSync(req.file.path);
            res.json({ success: true, text: data.text });
        } catch (innerErr) {
            console.error("Critical:", innerErr);
            res.status(500).json({ message: "Parsing failed" });
        }
    }
});

app.listen(5000, () => console.log('Backend running on 5000'));