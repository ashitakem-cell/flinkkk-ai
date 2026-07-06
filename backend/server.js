const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdf = require('pdf-parse');

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'File nahi mili!' });

  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer);
    
    // File delete karo taaki memory free rahe
    fs.unlinkSync(req.file.path); 

    res.status(200).json({ message: 'Success! Resume mil gaya.', text: data.text.substring(0, 100) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Parsing error hua!' });
  }
});

app.listen(5000, () => console.log('Server is running on port 5000'));