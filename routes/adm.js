const { Router, application } = require('express');
const express = require('express');
const route = express.Router();
const dados = require('../src/data/dados.json')
const jojodata = require('../models/Jojodata')
const user = require('../models/users')
const bcrypt = require('bcrypt')

route.post('/createuser',restrict, (req, res) => { 
      function getid(){
            let id= (Math.random()*100)
            return id;
      }
      const newuser = { id:getid(),
            nick: req.body.nick, password: bcrypt.hashSync(req.body.senha, 10) }
      user.create(newuser).then(() => { res.status(200).send('user criado') }).catch((err) => { res.status(501).send(`erro ao cadastrar ${err}`) });
})

function restrict(req, res, next) {
      if (req.session.adm == true) {
            console.log('acesso de adm')
            next();
      } else {

            res.status(404).end();
      }
}


function conectdb() {
      dados.splice(0, dados.length)
      jojodata.stands.findAll({ order: [['createdAt', 'ASC']] }).then((data) => {
            for (let i in data) {
                  dados.push(data[i])
            }

      })
}




route.post('/create', restrict, (req, res) => {
      const newstand = req.body
      newstand.id = idgerator()

      function idgerator() {

            return (String(Math.random() * 10).replace('.', ''))
      }

      conectdb()
      jojodata.stands.create(newstand).then((x) => {

            conectdb()

            res.redirect('/admin')
      })


})

route.put('/update:i', restrict, (req, res) => {
      jojodata.stands.update(req.body, { where: { id: req.params.i } }).then((x) => {

            conectdb()
            res.send('sucess')
      })


})

route.delete('/delete:i', restrict, (req, res) => {
      jojodata.stands.destroy({ where: { id: req.params.i } }).then((x) => {
            conectdb()

            res.send('deletado')
      })


})

route.post('/register', restrict, (req, res) => {
      console.log(req.body)
      let sault = 10

      let senhacry = bcrypt.hashSync(req.body.senha, 10);



      let register = {
            id: String(Math.random() * 10).replace('.', ''),
            nick: req.body.nick,
            password: senhacry
      }

      console.log(register)

      user.create(register);
      res.redirect('/')


})


route.post('/authentificate', (req, res) => {


      user.findAll({ where: { nick: req.body.nick } })
            .then((us) => {
                  bcrypt.compare(req.body.senha, us[0].password)
                        .then((data) => {
                              console.log(data)
                              if (data == false) { res.redirect('/') }
                              else {
                                    req.session.adm = true;
                                    res.redirect('/admin')
                              }
                        })


            }).catch((error) => { res.redirect('/') })
})


route.post('/passatualizer', restrict, (req, res) => {

      user.findAll({ where: { nick: req.body.nick } })
            .then((us) => {
                  bcrypt.compare(req.body.senha, us[0].password)
                        .then((data) => {
                              console.log(data)
                              if (data == false) { res.redirect('/') }
                              else {
                                    let new_data = { id: us[0].id ,nick: us[0].nick, password: bcrypt.hashSync(req.body.senha_new,10) }
                                   console.log(new_data)
                                    user.update(new_data, { where: { id: us[0].id } }).then((re) => { 
                                          req.session.adm=false
                                          res.send('senha atualizada') }).catch((er) => { res.redirect('/') })
                              }
                        })


            }).catch((error) => { res.redirect('/') })
}
)


route.get('/exit', restrict, (req, res) => {

      req.session.adm = false;
      res.redirect('/')
})

route.get('/userids', restrict, (req, res) => {
      user.findAll().then((data) => {
            const ids = []
            for (let i in data) {
                  ids.push(data[i].id)
            }
            res.send(ids)
      })


})


module.exports = route;