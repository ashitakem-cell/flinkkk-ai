const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// CORS ko har jagah se allow karo
app.use(cors({ origin: '*' }));

// Uploads folder mein files save karega
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File nahi mili!' });
  }
  // Yahan tumhara logic aayega
  console.log('File mil gayi:', req.file.originalname);
  res.status(200).json({ message: 'Success! Resume mil gaya.' });
});

app.listen(5000, () => console.log('Server is running on port 5000'));