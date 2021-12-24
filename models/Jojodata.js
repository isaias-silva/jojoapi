const db = require('./Db')
const Stands = db.sequelize.define('stands', {
    id: { type: db.Sequelize.STRING, primaryKey: true },
    name: { type: db.Sequelize.STRING },
    user: { type: db.Sequelize.TEXT },
    desc: { type: db.Sequelize.TEXT },
    power: { type: db.Sequelize.STRING(20) },
    speed: { type: db.Sequelize.STRING(20) },
    range: { type: db.Sequelize.STRING(20) },
    durability: { type: db.Sequelize.STRING(20) },
    precision: { type: db.Sequelize.STRING(20) },
    potential: { type: db.Sequelize.STRING(20) },
    img: { type: db.Sequelize.TEXT },
    color: { type: db.Sequelize.STRING },

})





//Stands.sync({ force: true })

//Stats.sync({ force: true })


module.exports = { stands: Stands,};
