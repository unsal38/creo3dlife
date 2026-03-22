const mongoose = require('mongoose')
const blog_singleSchema = require('../schema/blog_singleSchema')
const data_base_create = function data_base_create(data, database_name) {
    try {
        const create_blog = new blog_singleSchema(data)
        create_blog.save()
        return true
    } catch (err) {
        console.log(err.message)
        return false
    }
}
module.exports = { data_base_create }