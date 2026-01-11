const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const connectDB=require("./config/db");
require("dotenv").config();
const authRoutes=require('./routes/auth.routes');

const path=require('path');
const app=express();

app.use(cors());
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use("/api/auth",authRoutes);
app.use("/api/products",require("./routes/product.routes"));
app.use("/api/orders",require("./routes/order.routes"));
app.use("/api/payments",require("./routes/payment.routes"));

app.get("/",(req,res)=>{
    res.send("API running");
})
console.log("Hi I am creating Ecommerce Application");
const PORT=process.env.PORT || 5000;
connectDB();
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});


