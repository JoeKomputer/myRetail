'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    title: String,
    image: String,
    description: String,
    price:Number,
    online:Boolean,
    quantity:Number,
    details:Array
});

module.exports = mongoose.model('Products', ProductsSchema);