const express = require("express")
const { router } = require("./routes/index");
const { products } = require("./routes/products");
const {admin}= require("./routes/admin");
const methodOverride = require("method-override")



const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use (express.static("public"))
app.use(methodOverride("_method"))
app.set("view engine" , "ejs")
app.set("views", "./src/views")

app.listen(PORT, () => {
    console.log(`Su servidor corre en el puerto = ${PORT}`);
})




app.use("/", router);

app.use("/products", products);

app.use("", admin)

