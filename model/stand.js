const mongoose = require('./db')
//schema de post
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
     img: Buffer,
     color: String

}, { collection: 'stand' }
);
module.exports=standSchema