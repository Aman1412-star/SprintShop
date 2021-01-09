const mongoose = require('mongoose');

const Schema = mongoose.Schema;



let productSchema= Schema({

    category_id: {type : Schema.Types.ObjectId, ref : 'category'},
    product_name: String,
    price: Number,
    product_details: String,
    product_image:[String],
    feedback:[{
        customer_name: String,
        feedback: String,
        reviews: Number,
    }],
    stock: Number,
    hide: Boolean
})    

const Product= mongoose.model('product' , productSchema);

module.exports= Product;