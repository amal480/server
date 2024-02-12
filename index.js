const express = require("express");
const connecttomongo =require('./db')

connecttomongo();
const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.use('/api/auth', require('./routes/auth'))

app.listen(3000, () => console.log("Server is running"));