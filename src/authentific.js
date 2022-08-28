const bcrypt = require('bcrypt')

const { consultOneUser } = require('../model/users')


const authentic = async function (user) {
    

    const userData = await consultOneUser(user.nick)

    if (!userData) {
        return null
    }
    const result = await bcrypt.compare(user.password, userData.password)

    if (result == true) {
        console.log(`#user ${user.nick} login`)

        return {
            id: userData.id,
            class: userData.class,
            nick: userData.nick
        }
    } else {
        

        return false
    }
    return false

}

module.exports = authentic