require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RecruitAI Backend Running 🚀",
  });
});

app.post(
  "/api/recruit/upload-resume",
  upload.single("resume"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    res.json({
      success: true,
      fileName: req.file.originalname,
      size: req.file.size,
      text: `
Resume Received Successfully

Candidate:
${req.file.originalname}

Status:
Resume Uploaded Successfully.

Next Step:
Gemini AI Analysis will be added.
`,
    });
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on ${PORT}`);
});