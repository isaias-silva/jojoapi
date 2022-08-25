const bcrypt = require('bcrypt')
const User = require('../src/data/users.json')
const fs = require('fs')


const authentic = async function(user) {
    console.log(user)
    for (let i in User) {
        if (user.nick == User[i].nick) {
            const result = await bcrypt.compare(user.password, User[i].password)

            if (result == true) {
                let msg = `user ${user.nick} login`

                return { id: User[i].id, class: User[i].class, nick: User[i].nick, class: User[i].class }
            } else {
                let msg = `user ${user.nick} senha incorreta`

                return false
            }
        }
    }

    return false

}

module.exports = authentic