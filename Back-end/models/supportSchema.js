const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let querySchema= Schema({
    
    query: String,
    solutiion: String
})

let faqSchema= Schema({

    faq: String,
    answer: String
})  

const Query= mongoose.model('query' , querySchema);

module.exports= Query;

const Faq= mongoose.model('faq' , faqSchema);

module.exports= Faq;