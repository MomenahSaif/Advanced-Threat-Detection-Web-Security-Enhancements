const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

/* =========================
   Rate Limiting Middleware
   ========================= */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,               // limit each IP to 100 requests
  message: "Too many requests, please try again later"
});


const cors = require("cors");

/* =========================
   CORS Configuration
   ========================= */
const corsOptions = {
  origin: "http://localhost:3000", // allowed frontend
  methods: ["GET", "POST"],
  credentials: true
};

app.use(cors(corsOptions));


/* =========================
   API Key Authentication
   ========================= */
const API_KEY = "internship123"; // demo key

function apiKeyAuth(req, res, next) {
  const apiKey = req.header("x-api-key");

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ message: "Unauthorized - Invalid API Key" });
  }

  next();
}


const helmet = require("helmet");

/* =========================
   Security Headers
   ========================= */
app.use(helmet());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);


app.use(
  helmet.hsts({
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true,
  })
);

// Apply limiter to all API routes
app.use("/api/", apiLimiter);

/* =========================
   Default Middleware
   ========================= */
app.use(express.json());


app.get("/api/test", (req, res) => {
  res.json({ message: "API working with security headers" });
});

/* =========================
   Test Route
   ========================= */
app.get("/api/secure", apiKeyAuth, (req, res) => {
  res.json({ message: "Secure API access granted" });
});

/* =========================
   Start Server
   ========================= */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
