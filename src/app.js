const express = require('express')
const { router } = require("./routes/index");

const app = express();
const PORT = 3000;

app.use (express.static("public"))
app.set("view engine" , "ejs")
app.set("views", "./src/views")

app.listen(PORT, () => {
    console.log(`esta en server = ${PORT}`);
})



app.use("/", router);


app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})
app.get('/airForce', (req,res) => {
    res.sendFile(path.join(__dirname, './views/airForce.html'))
})
app.get('/airMax', (req,res) => {
    res.sendFile(path.join(__dirname, './views/airMax.html'))
})
app.get('/jordan', (req,res) => {
    res.sendFile(path.join(__dirname, './views/jordan.html'))
})
app.get('/react', (req,res) => {
    res.sendFile(path.join(__dirname, './views/react.html'))
})
app.get('/productCart', (req,res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
})
