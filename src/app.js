const express = require('express')
const { router } = require("./routes/index");
const { products } = require('./routes/products');

const app = express();
const PORT = 3000;

app.use (express.static("public"))
app.set("view engine" , "ejs")
app.set("views", "./src/views")

app.listen(PORT, () => {
    console.log(`esta en server = ${PORT}`);
})



app.use("/", router);

app.use("/products", products)

