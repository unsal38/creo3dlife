const { default: mongoose } = require("mongoose");

const blog_singleSchema = new mongoose.Schema({
    image: String,
    title: String,
    body: String
}, { timestamps: true })
module.exports = mongoose.model('blog_single', blog_singleSchema)