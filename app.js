const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

// ROUTERLAR     
const indexRouter = require("./routes/index")
 // MİDDLEWARE

// MONGOOSE 
 const connect_data_base = require("./server")

app.set("view engine", "ejs")
app.use(express.static("./public"))
// const __dirname = path.dirname(new URL(import.meta.url).pathname)
// app.use(express.static(path.join(__dirname, './public')));
// console.log(__dirname)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());


app.use("/",indexRouter)

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, console.log("http://localhost:3000", "listen 3000"));





