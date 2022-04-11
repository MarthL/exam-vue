var mongoose = require('mongoose')
const { Schema } = mongoose;

const todoSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    description:   String,
    date: { type: Date, default: Date.now },
    done: Boolean,
});

module.exports = mongoose.model('Todos', todoSchema)