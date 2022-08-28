const mongoose = require('./db')
    //schema de stand
const standSchema = new mongoose.Schema({
    name: String,
    user: String,
    desc: String,
    power: String,
    speed: String,
    range: String,
    durability: String,
    precision: String,
    potential: String,
    img: String,
    color: String

}, { collection: 'stands' });
module.exports = standSchema