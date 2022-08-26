const standSchema = require("../model/stand")
const mongoose= require('../model/db')

module.exports= async ()=>{
    const stands = mongoose.model('stands', standSchema, 'stands')
    try {
        let data = await stands.find({})

        return data      
    } catch (err) {
        console.log(err)
       return 0
    }
} 