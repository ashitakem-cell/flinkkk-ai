const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdf = require('pdf-parse'); // PDF reading library

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'File nahi mili!' });

  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer); // PDF se text nikalna
    
    // File cleanup
    fs.unlinkSync(req.file.path); 

    res.status(200).json({ 
      message: 'Resume parsed successfully!', 
      text: data.text.substring(0, 500) // Pehle 500 characters
    });
  } catch (error) {
    res.status(500).json({ message: 'Parsing mein error aaya!' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));