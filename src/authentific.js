const bcrypt = require('bcrypt')

const { consultOneUser } = require('../model/users')


const authentic = async function (user) {
    console.log(user)

    const userData = await consultOneUser(user.nick)
console.log(userData)
    if (!userData) {
        return null
    }
    const result = await bcrypt.compare(user.password, userData.password)

    if (result == true) {
        let msg = `user ${user.nick} login`

        return {
            id: userData.id,
            class: userData.class,
            nick: userData.nick
        }
    } else {
        let msg = `user ${user.nick} senha incorreta`

        return false
    }
    return false

}

module.exports = authentic