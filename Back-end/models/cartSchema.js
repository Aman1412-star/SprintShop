const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let detailsSchema=Schema({
    product_id: {type : Schema.Types.ObjectId, ref : 'product'},
    quantity: Number,
})

let cartSchema= Schema({

    product_details: [detailsSchema],
    number_of_items: Number,
})

const Cart= mongoose.model('cart' , cartSchema);

module.exports= Cart;




