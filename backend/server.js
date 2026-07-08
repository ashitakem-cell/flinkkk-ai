require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

// ============================
// CORS Configuration
// ============================
app.use(
  cors({
    origin: "https://opulent-space-robot-p777rxqrq4pwhrrj7-3000.app.github.dev",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

// ============================
// Home Route
// ============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RecruitAI Backend Running 🚀",
  });
});

// ============================
// Upload Resume Route
// ============================
app.post(
  "/api/recruit/upload-resume",
  upload.single("resume"),
  async (req, res) => {
    try {
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
    } catch (err) {
      console.error(err);

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
);

// ============================
// Start Server
// ============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on ${PORT}`);
});