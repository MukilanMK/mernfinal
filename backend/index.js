const ProductRoute = require("./routes/ProductRoute.js");
const express=require("express");
const app=express();
const cors = require("cors");
app.use(cors());
const dotenv=require("dotenv");
const connectdb=require("./config/db.js");
dotenv.config();
connectdb();
app.use(express.json());
app.use("/api", ProductRoute);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})