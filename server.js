
const mongoose = require("mongoose")
require('dotenv').config()

const connect_data_base = mongoose.connect(`mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@cluster0.uefzn.mongodb.net/creo3dlife`)
    .then(() => console.log("connect mongodb"))

module.exports = connect_data_base
