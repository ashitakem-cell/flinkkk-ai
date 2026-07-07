const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdf = require('pdf-parse');

const app = express();
app.use(cors({ origin: '*' }));
// Temporary upload folder
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  try {
    // File read karo
    const dataBuffer = fs.readFileSync(req.file.path);
    
    // PDF Parse karo
    const data = await pdf(dataBuffer);
    
    // Cleanup: File delete karo
    fs.unlinkSync(req.file.path);

    res.status(200).json({ 
      success: true, 
      text: data.text 
    });
  } catch (error) {
    console.error("Critical Parsing Error:", error);
    // Agar file bach gayi ho toh cleanup karo
    if (req.file.path && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    
    res.status(500).json({ success: false, message: 'PDF parsing failed' });
  }
});

app.listen(5000, () => console.log('Backend server running on port 5000'));