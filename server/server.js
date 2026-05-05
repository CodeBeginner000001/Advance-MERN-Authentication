const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const connectDB = require("./db/connectDB.js")
const authRoutes = require("./routes/authRoutes.js")
const cookieParser = require("cookie-parser")
const cors = require("cors")
dotenv.config();
const app = express();
const port = process.env.PORT || 5002;

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      process.env.CLIENT_URL,
      /^https:\/\/advance-mern-authentication.*\.vercel\.app$/,
    ];
    if (!origin || allowed.some(p => typeof p === 'string' ? p === origin : p.test(origin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Advance MERN Authentication Server</title>
  <link rel="icon" type="image/png" href="/favicon.png"/>
</head>
<body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#0f172a;font-family:sans-serif;">
  <div style="text-align:center;color:#f8fafc;">
    <img src="/favicon.png" width="72" style="margin-bottom:16px;"/>
    <h1 style="font-size:2rem;margin:0 0 8px;">Server is Running</h1>
    <p style="color:#94a3b8;margin:0;">Advance MERN Authentication Server</p>
  </div>
</body>
</html>`);
})
app.use("/api/auth",authRoutes)

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
});
 