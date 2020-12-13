const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let categorySchema= Schema({

    category_name: String,
})

const Category= mongoose.model('category' , categorySchema);

module.exports= Category;