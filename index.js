const express = require("express");
const connecttomongo =require('./db')

connecttomongo();
const app = express();
app.listen(3000, () => console.log("Server is running"));