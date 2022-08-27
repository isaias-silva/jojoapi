const standSchema = require("./standModel")
const mongoose = require('./db')

 async function consult() {
    const stands = mongoose.model('stands', standSchema, 'stands')
    try {
        let data = await stands.find({})

        return data
    } catch (err) {
        console.log(`erro no mongo`)
        return []
    }
}
async function consultOne(id){
    const stands = mongoose.model('stands', standSchema, 'stands')
    try {
        let data = await stands.findById(id)
        return data
    } catch (err) {
        return {}
    }
}
async function create(obj){
    const Stands = mongoose.model('stands', standSchema, 'stands')
    try {

        const standOne = new Stands(obj)
        await standOne.save()
        return true
    } catch (err) {
        return null
    }


}
module.exports = {consult,consultOne}