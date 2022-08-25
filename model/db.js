const mongoose= require("mongoose");
const dotenv =require('dotenv')
dotenv.config()
//variaveis de ambiente
const user = process.env.DB_USER
const password = process.env.DB_PASS

//conexão mongo
mongoose.connect(`mongodb://localhost/jojodata`)
    .then(() => { console.log('connectado ao mongodb') })
    .catch((e) => { console.log(e) })

module.exports= mongoose