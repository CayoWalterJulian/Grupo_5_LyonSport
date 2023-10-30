const express = require("express")
const { router } = require("./routes/index");
const { products } = require("./routes/products");
const { users } = require("./routes/users")
const { admin }= require("./routes/admin");
// const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const methodOverride = require("method-override");
const morgan = require('morgan');
const session = require("express-session");
const cookies = require('cookie-parser')



const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));

app.use (express.static("public"));
app.use(methodOverride("_method"));

app.use(session({secret: "este es un secreto",
saveUninitialized: false ,
resave: false,
}))

app.set("view engine" , "ejs");
app.set("views", "./src/views");

app.use(cookies())

// app.use(userLoggedMiddleware)

app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`Su servidor corre en el puerto = ${PORT}`)
});




app.use("/", router);

app.use("/products", products);

// app.use("", users)

app.use("", admin);

