const userSchema = require("./usersModel")
const mongoose = require('./db')

 async function consultUsers() {
    const users = mongoose.model('users', userSchema, 'users')
    try {
        let data = await users.find({})
        data.map(x=>x.password="#############")
        return data
    } catch (err) {
        console.log(`erro no mongo`)
        return []
    }
}
async function consultOneUser(nick){
    const users = mongoose.model('users', userSchema, 'users')
    try {
        let data = await users.findOne({nick:nick})
        return data
    } catch (err) {
        console.log(err)
        return {}
    }
}
async function createUser(obj){
    const Users = mongoose.model('users', userSchema, 'users')
    try {

        const userOne = new Users(obj)
        await userOne.save()
        return true
    } catch (err) {
        return null
    }


}
async function deleteOneUser(id){
    const users = mongoose.model('users', userSchema, 'users')
    let data = await Stands.findById(id)
    if (data != null) {
        await users.deleteOne({ _id: id })
        return true
    } else {
        return null
    }

}
async function updateOneUser(id,obj){
    const users = mongoose.model('users', userSchema, 'users')
    let data = await users.findById(id)
    if (data != null) {
        await users.updateOne({ _id: id, },obj)
        return true
    } else {
        return null
    }

}
module.exports = {consultUsers,consultOneUser,createUser,deleteOneUser,updateOneUser}