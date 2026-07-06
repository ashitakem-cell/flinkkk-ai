const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// CORS allow karna zaroori hai
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File upload failed!' });
  }
  console.log('File received:', req.file.originalname);
  res.json({ message: 'Resume successfully uploaded and received by AI!' });
});

app.listen(5000, () => console.log('Backend is running on port 5000'));