const express = require(`express`);
const page = express();
const dados = require('../src/data/dados.json');
const info = require('../src/data/info.json');
const authentific = require('../src/authentific');
page.get('/', (req, res) => {

    res.render('index.ejs', { key: "home", acess: dados.length, linkapi: info.github })
})

page.get('/howtouse', (req, res) => {
    res.render('index.ejs', { key: "how", acess: dados.length })
})

page.get('/about', (req, res) => {
    res.render('index.ejs', { key: "about", acess: dados.length })
})
page.get('/hexagraph', (req, res) => {
    res.render('index.ejs', { key: "hex", acess: dados.length })
})
page.get('/jojostands', (req, res) => {


    res.send(dados)
})
page.get('/jojostands/stand/number/:n', (req, res) => {
    if (dados[req.params.n] == undefined) {
        res.status(404).send()
    } else {

        res.send(dados[req.params.n])
    }
})
page.get('/jojostands/stand/id/:id', (req, res) => {
    for (let i in dados) {

        if (dados[i].id == req.params.id) {

            res.send(dados[i])
        }
    }
    res.status(404).send()
})
page.get('/guide', (req, res) => {
    res.render('index.ejs', { key: "guide", acess: dados.length, data: dados })
})


page.get('/login', (req, res) => {

    res.render('login-adm.ejs')

})
page.post('/aut', (req, res) => {
    authentific(req.body).then((user) => {
        if (user != false) {
            req.session.login = true
            req.session.user = user
            res.redirect('/admin/')
        } else {
            req.session.baned = true
        }
    })
})
module.exports = page