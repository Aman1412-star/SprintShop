const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let address =Schema({

    addressline1: String,
    addressline2: String,
    addressline3: String,
    city:String,
    zipcode: Number,
    state:String
})

let lineItem = Schema({
    product_image: URL,
    product_name: String,
    price: Number,
    quantity: Number
})

let orderSchema= Schema({

    order_details: [lineItem],
    customer_name: String,
    deliver_address: [address],
    total_amount: Number,
    payment_details:  String,
    order_date: Date
})
 
const Order= mongoose.model('orders' , orderSchema);

module.exports= Order;

