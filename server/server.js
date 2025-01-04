const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./db/connectDB.js")
const authRoutes = require("./routes/authRoutes.js")
const cookieParser = require("cookie-parser")
const cors = require("cors")
dotenv.config();
const app = express();
const port = process.env.PORT || 5002;

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}));
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("hello world");
})
app.use("/api/auth",authRoutes)

app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})
 