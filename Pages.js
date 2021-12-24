const { Router } = require('express');
const express = require('express');
const route = express.Router();
const trafic = require('./src/data/trafic.json')
route.use(express.static(__dirname + '/'));
const user = require('./models/users')
const session = require('express-session')


function restrict(req, res, next) {
   if (req.session.adm == true) {
      next();
   } else {
      req.session.error = 'Access denied!';
      res.status(404).end();
   }
}


route.get('/', (req, res) => {


   res.status(200).sendFile(__dirname + '/client/index.html')


})

route.get('/guide', (req, res) => {


   res.status(200).sendFile(__dirname + '/client/standguide.html')


})

route.get('/info', (req, res) => {
   res.json(trafic)
})

route.get('/hexagraph', (req, res) => {


   res.status(200).sendFile(__dirname + '/client/hexagraph.html')


})

route.get('/about', (req, res) => {


   res.status(200).sendFile(__dirname + '/client/about.html')


})

route.get('/howtouse', (req, res) => {


   res.status(200).sendFile(__dirname + '/client/howtouse.html')


})

route.get('/admin/login:pass', (req, res) => {
   user.findAll({ where: { id: req.params.pass } }).then((data) => {
      if (data.length != 0) {
         if (req.session.adm == true) {
            res.redirect('/admin')
         } else {
            res.status(200).sendFile(__dirname + '/client/login.html')
         }
      } else {
         res.status(401).end()
      }
   }).catch((erro) => { res.status(404).end() })
}


)
route.get('/admin/editpassword', restrict, (req, res) => {


   res.status(200).sendFile(__dirname + '/client/editpass.html')


})


route.get('/admin', restrict, (req, res) => {


   res.status(200).sendFile(__dirname + '/client/admin.html')


})



module.exports = route;