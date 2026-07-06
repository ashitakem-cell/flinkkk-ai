const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// CORS allow karna zaroori hai
app.use(cors({ origin: '*' })); 

// Multer storage
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File nahi mili!' });
  }
  console.log('File aayi:', req.file.originalname);
  res.status(200).json({ message: 'Success! Resume mil gaya.' });
});

// Server listen
app.listen(5000, () => console.log('Server is running on port 5000'));