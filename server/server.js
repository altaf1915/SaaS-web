const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const cookieParser = require("cookie-parser")

require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const contactRoutes = require("./routes/contactRoutes")
const projectRoutes = require("./routes/projectRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
const teamRoutes = require("./routes/teamRoutes")

const app = express()

const PORT = process.env.PORT || 5000

// --------------------------------------------------
// Connect Database
// --------------------------------------------------

connectDB()

// --------------------------------------------------
// Security
// --------------------------------------------------

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  })
)

// --------------------------------------------------
// CORS
// --------------------------------------------------

const allowedOrigins = (
  process.env.CLIENT_URL ||
  "https://saa-s-web-delta.vercel.app"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean)

console.log(
  "Allowed CORS origins:",
  allowedOrigins
)

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without Origin
      // (Postman/server-to-server)
      if (!origin) {
        return callback(null, true)
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      console.error(
        "CORS blocked origin:",
        origin
      )

      return callback(
        new Error("Not allowed by CORS")
      )
    },

    credentials: true,
  })
)

// --------------------------------------------------
// Request Parsing
// --------------------------------------------------

app.use(
  express.json({
    limit: "1mb",
  })
)

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  })
)

// IMPORTANT: must be before routes
app.use(cookieParser())

// --------------------------------------------------
// Rate Limiting
// --------------------------------------------------

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 300,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many requests. Please try again later.",
  },
})

app.use("/api", apiLimiter)

// --------------------------------------------------
// Health Check
// --------------------------------------------------

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SaaS API is running",
  })
})

// --------------------------------------------------
// API Routes
// --------------------------------------------------

app.use(
  "/api/auth",
  authRoutes
)

app.use(
  "/api/contact",
  contactRoutes
)

app.use(
  "/api/projects",
  projectRoutes
)

app.use(
  "/api/dashboard",
  dashboardRoutes
)

app.use(
  "/api/team",
  teamRoutes
)

// --------------------------------------------------
// API 404 Handler
// --------------------------------------------------

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  })
})

// --------------------------------------------------
// Global Error Handler
// --------------------------------------------------

app.use(
  (error, req, res, next) => {
    console.error(
      "Server error:",
      error.message
    )

    if (
      error.message ===
      "Not allowed by CORS"
    ) {
      return res.status(403).json({
        success: false,
        message:
          "CORS policy blocked this request.",
      })
    }

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong on the server.",
    })
  }
)

// --------------------------------------------------
// Start Server
// --------------------------------------------------

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )

  console.log(
    `Environment: ${
      process.env.NODE_ENV || "production"
    }`
  )
})