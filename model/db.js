const mongoose= require("mongoose");
const dotenv =require('dotenv')

//variaveis de ambiente
dotenv.config()

const user = process.env.DB_USER
const password = process.env.DB_PASS

//conexão mongo

mongoose.connect(`mongodb+srv://${user}:${password}@jojodata.n1gvdic.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => { console.log('connectado ao mongodb') })
    .catch((e) => { console.log(e) })

module.exports= mongoose