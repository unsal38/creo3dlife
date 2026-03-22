const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');
const mongoose = require('mongoose');
// ROUTERLAR     
const indexRouter = require("./routes/index");
const blogRouter = require('./routes/blog');
// MİDDLEWARE
const send_contact_mail = require('./middleware/nodemailler');
// MONGOOSE 
const connect_data_base = require("./server");
// SİTE CONFİG 
const configPath = path.join( __dirname, 'public');
app.use(express.static(configPath))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());
// SİTE PAGE ROUTER
app.use('/blog', blogRouter);
app.use("/", indexRouter);
app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, console.log("http://localhost:3000", "listen 3000"));





