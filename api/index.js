const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const sliderRoute = require("./routes/slider"); 
const cors = require("cors");

app.use(cors());
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connection Successful!"))
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute);
app.use("/api/sliders",sliderRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running");
});