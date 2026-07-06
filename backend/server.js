const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// CORS ko open karna zaroori hai taaki frontend request bhej sake
app.use(cors({ origin: '*' })); 

// Multer storage setup
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File upload nahi ho payi!' });
  }
  console.log('File mili:', req.file.originalname);
  res.status(200).json({ message: 'Success! Resume mil gaya.' });
});

app.listen(5000, () => console.log('Server is running on port 5000'));
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdf = require('pdf-parse'); // Yeh library text nikalti hai

const app = express();
app.use(cors({ origin: '*' }));
const upload = multer({ dest: 'uploads/' });

app.post('/api/recruit/upload-resume', upload.single('resume'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'File nahi mili!' });

  // PDF file ko read karo
  const dataBuffer = fs.readFileSync(req.file.path);
  
  try {
    const data = await pdf(dataBuffer);
    const resumeText = data.text; // Yahan resume ka sara text aa gaya!

    console.log('Extracted Text:', resumeText.substring(0, 200)); // Console mein check karo

    // Yahan tum apna screening logic laga sakti ho
    res.status(200).json({ 
      message: 'Success!', 
      text: resumeText.substring(0, 500) // Frontend ko thoda text bhej do
    });
  } catch (error) {
    res.status(500).json({ message: 'Parsing error!' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));