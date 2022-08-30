const express = require(`express`);
const page = express();
const axios = require('axios')
const info = require('../src/data/info.json');
const { mongoose } = require('../model/db');
const standSchema = require('../model/standModel')
const authentific = require('../src/authentific');
const { consult, consultOne } = require('../model/stands');

const bcrypt = require("bcrypt")

const dados = require('../src/data/dados.json')
let stands = null
page.use(async(req, res, next) => {
    stands = await consult()
    next()
})
page.get('/home', (req, res) => {
    res.redirect('/')
})
page.get('/', (req, res) => {

    res.render('index.ejs', { key: "home", acess: stands.length, linkapi: info.github })
})

page.get('/howtouse', (req, res) => {
    res.render('index.ejs', { key: "how", acess: stands.length })
})

page.get('/about', (req, res) => {
    res.render('index.ejs', { key: "about", acess: stands.length })
})
page.get('/hexagraph', (req, res) => {
    res.render('index.ejs', { key: "hex", acess: stands.length })
})
page.get('/jojostands', async(req, res) => {

    res.json(stands)

})

page.get('/jojostands/stand/id/:id', async(req, res) => {
    if (!req.params.id) {
        return res.sendStatus(404)
    }
    let stand = await consultOne(req.params.id)
    res.json(stand)
})

page.get('/guide', async(req, res) => {

    res.render('index.ejs', { key: "guide", acess: stands.length, data: stands })
})


page.get('/login', (req, res) => {

    res.render('login-adm.ejs', { msg: '' })

})
page.post('/aut', (req, res) => {
    authentific(req.body).then((user) => {
        if (user != false) {
            req.session.login = true
            req.session.user = user
            res.redirect('/admin/')
        } else {

            res.render('login-adm.ejs', { msg: 'usuario não existe ou senha está incorreta!' })
        }
    })
})

module.exports = page