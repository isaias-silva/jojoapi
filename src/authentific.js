const bcrypt = require('bcrypt')
const User = require('../src/data/users.json')
const fs = require('fs')
//let varcrypt=bcrypt.hashSync(User[0].password,10)
//User[0].password=varcrypt
//fs,fs.writeFileSync('./data/users.json',JSON.stringify(User),(msg)=>{console.log('markage')})
const authentic = async function (user) {

    for (let i in User) {
        if (user.nick == User[i].nick) {
            const result = await bcrypt.compare(user.password, User[i].password)
            
            if (result == true) { return {id: User[i].id, class:User[i].class,nick:User[i].nick,class:User[i].class} } else { return false }
        }
    }

    return false

}

module.exports = authentic