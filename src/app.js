const express = require('express')
const { router } = require("./routes/index");
const { products } = require('./routes/products');
const login = require("./routes/login")
const {editoradd}= require("./routes/aditoradd");
const register = require("./routes/register");


const app = express();
const PORT = 3000;

app.use (express.static("public"))
app.set("view engine" , "ejs")
app.set("views", "./src/views")

app.listen(PORT, () => {
    console.log(`Su servidor corre en el puerto = ${PORT}`);
})




app.use("/", router);

app.use("/products", products);

app.use("/login", login)

app.use("", editoradd)

app.use("/register", register)
