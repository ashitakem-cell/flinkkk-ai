const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// CORS ko poora open rakho taaki frontend connect ho sake
app.use(cors({ origin: '*' })); 

const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File upload nahi ho payi!' });
  }
  console.log('File mili:', req.file.originalname);
  res.status(200).json({ message: 'Success! Resume mil gaya.' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));