require("dotenv").config(); 
const mongoose = require('mongoose');

const connecttomongo = async() => {
    await mongoose.connect(process.env.MONGODB_URL,
        console.log("Connected"),
    )
}
module.exports = connecttomongo;