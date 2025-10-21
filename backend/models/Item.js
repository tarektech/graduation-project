const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    creator: {type: mongoose.Types.ObjectId, required: true , ref: "User"}
});

ItemSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Item', ItemSchema);
