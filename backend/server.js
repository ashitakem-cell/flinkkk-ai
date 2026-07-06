const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// CORS fix: kisi bhi origin se request accept karega
app.use(cors({ origin: '*' }));

// File storage configuration
const upload = multer({ dest: 'uploads/' });

// API Route
app.post('/api/recruit/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File nahi mili!' });
  }
  console.log('File successfully received:', req.file.originalname);
  res.status(200).json({ message: 'Success! Resume mil gaya.' });
});

app.listen(5000, () => console.log('Backend server running on port 5000'));