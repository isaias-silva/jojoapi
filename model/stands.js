const standSchema = require("./standModel")
const mongoose = require('./db')

 async function consult() {
    console.log('# consult all stands')
    const stands = mongoose.model('stands', standSchema, 'stands')
    try {
        let data = await stands.find({})

        return data
    } catch (err) {
        console.log(err)
        return []
    }
}
async function consultOne(id){
    console.log('# consult One stands')
    const stands = mongoose.model('stands', standSchema, 'stands')
    try {
        let data = await stands.findById(id)
        return data
    } catch (err) {
        return {}
    }
}
async function create(obj){
    console.log('# create stand')
    const Stands = mongoose.model('stands', standSchema, 'stands')
    try {

        const standOne = new Stands(obj)
        await standOne.save()
        return true
    } catch (err) {
        return null
    }


}
async function deleteOne(id){
    console.log('# delete stand')
    const Stands = mongoose.model('stands', standSchema, 'stands')
    let data = await Stands.findById(id)
    if (data != null) {
        await Stands.deleteOne({ _id: id })
        return true
    } else {
        return null
    }

}
async function updateOne(id,obj){
    console.log('# update stand')
    const Stands = mongoose.model('stands', standSchema, 'stands')
    let data = await Stands.findById(id)
    if (data != null) {
        await Stands.updateOne({ _id: id, },obj)
        return true
    } else {
        return null
    }

}
module.exports = {consult,consultOne,create,deleteOne,updateOne}