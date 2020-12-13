const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let detailsSchema=Schema({
    product_id: Number,
    product_name: String,
    product_image: String,
    price: Number,
    quantity: Number,
})

let cartSchema= Schema({

    cart_id: Number,
    product_details: [detailsSchema],
    number_of_items: Number,
})

const Cart= mongoose.model('cart' , cartSchema);

module.exports= Cart;




