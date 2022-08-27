const express = require(`express`);
const page = express();
const axios = require('axios')
const info = require('../src/data/info.json');
const { mongoose } = require('../model/db');
const standSchema = require('../model/standModel')
const authentific = require('../src/authentific');
const { consult, consultOne } = require('../model/stands');

let stands = null

page.use(async (req, res, next) => {
    stands = await consult()
    next()
})
page.get('/', (req, res) => {

    res.render('index.ejs', { key: "home", acess: stands.length, linkapi: info.github })
})

page.get('/howtouse', (req, res) => {
    res.render('index.ejs', { key: "how", acess: stands.length })
})

/*
page.get('/gravar',async (req,res)=>{
    const Stands = mongoose.model('stands', standSchema, 'stands')
    try {
        for await (let item of dados ){
            const standOne=new Stands(item)
           await standOne.save()
        }
        res.send("sucess")
    } catch (err) {
        res.sendStatus(501)
    }

  
})*/

page.get('/about', (req, res) => {
    res.render('index.ejs', { key: "about", acess: stands.length })
})
page.get('/hexagraph', (req, res) => {
    res.render('index.ejs', { key: "hex", acess: stands.length })
})
page.get('/jojostands', async (req, res) => {

    res.json(stands)

})

page.get('/jojostands/stand/id/:id', async (req, res) => {
    if (!req.params.id) {
        return res.sendStatus(404)
    }
    let stand = await consultOne(req.params.id)
    res.json(stand)
})

page.get('/guide', async (req, res) => {

    res.render('index.ejs', { key: "guide", acess: stands.length, data: stands })
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