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

// Connect database
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
  "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header.
      // Useful for server-to-server requests and tools
      // such as Postman.
      if (!origin) {
        return callback(null, true)
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      return callback(
        new Error("Not allowed by CORS")
      )
    },

    credentials: true,
  })
)

// --------------------------------------------------
// Request parsing
// --------------------------------------------------

app.use(express.json({ limit: "1mb" }))

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  })
)

app.use(cookieParser())

// --------------------------------------------------
// Rate limiting
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
// Health check
// --------------------------------------------------

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SaaS API is running",
  })
})

// --------------------------------------------------
// API routes
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
// 404 API handler
// --------------------------------------------------

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  })
})

// --------------------------------------------------
// Global error handler
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
// Start server
// --------------------------------------------------

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  )
})