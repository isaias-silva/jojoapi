const { Router } = require('express');
const express = require('express');
const route = express.Router();
const dados = require('../src/data/dados.json')
const trafic = require('../src/data/trafic.json')
const jojodata = require('../models/Jojodata')


//ao iniciar a aplicação
conectdb()

function conectdb() {
      dados.splice(0, dados.length)
      jojodata.stands.findAll({ order: [['createdAt', 'ASC']] }).then((data) => {
            for (let i in data) {
                  dados.push(data[i])
            }


      })
}

route.get('/api', (req, res) => {
      trafic.acess += 1;

      console.log(trafic)




      res.status(200).json(dados);


})


route.get('/apit', (req, res) => {




      res.status(200).json(dados);


})

/**/

module.exports = route;