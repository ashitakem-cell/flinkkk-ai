const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());
const upload = multer({ dest: 'uploads/' }); // Files is folder mein save hongi

app.post('/api/recruit/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File nahi mili!' });
  }
  
  // Yahan tum AI processing logic laga sakti ho
  console.log('File receive ho gayi:', req.file.originalname);
  
  res.json({ message: 'Resume successfully upload ho gaya!' });
});

app.listen(5000, () => console.log('Backend port 5000 par chal raha hai'));