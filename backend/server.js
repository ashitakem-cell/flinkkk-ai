const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdf = require('pdf-parse'); // Yahi sahi import hai

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'File nahi mili!' });

  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    
    // PDF Parse process
    const data = await pdf(dataBuffer);
    
    // File delete (Cleanup)
    fs.unlinkSync(req.file.path); 

    res.status(200).json({ 
      success: true, 
      text: data.text 
    });
  } catch (error) {
    console.error("PDF Parsing Error:", error);
    res.status(500).json({ success: false, message: 'Parsing failed!' });
  }
});

app.listen(5000, () => console.log('Backend server running on port 5000'));