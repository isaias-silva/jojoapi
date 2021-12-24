//importando
const Sequelize = require('sequelize')
//acessando banco
const sequelize = new Sequelize('jojo', 'isaias', 'CODE1S', { host: 'localhost', dialect: 'mysql' })
sequelize.authenticate().then((res) => console.log(`conectado com sucesso`)).catch((err) => console.log(`erro o erro foi: ${err}`))

/*const postagem=sequelize.define('tabela',{

  dado: {type:sequelize.STRING(10)}
})

//postagem.sync({force:true})

postagem.create({
dado:1

})*/
//exportar acesso
module.exports = { Sequelize: Sequelize, sequelize: sequelize }