const db = require('./Db')
const User = db.sequelize.define('users', {
    id: { type: db.Sequelize.STRING, primaryKey: true },
    nick: { type: db.Sequelize.STRING(10), allowNull: false,unique:true},
    password: { type: db.Sequelize.TEXT,allowNull: false, }

})





//User.sync({ force: true })


module.exports = User;
