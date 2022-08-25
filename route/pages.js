const express = require(`express`);
const page = express();
const axios = require('axios')
const dados = require('../src/data/dados.json');
const info = require('../src/data/info.json');
const { mongoose } = require('../model/db');
const standSchema = require('../model/stand')
const authentific = require('../src/authentific');
page.get('/', (req, res) => {

    res.render('index.ejs', { key: "home", acess: dados.length, linkapi: info.github })
})

page.get('/howtouse', (req, res) => {
        res.render('index.ejs', { key: "how", acess: dados.length })
    })
    /*
    page.get('/gravar',async (req,res)=>{
        const Stands = mongoose.model('posts', standSchema, 'posts')
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
    res.render('index.ejs', { key: "about", acess: dados.length })
})
page.get('/hexagraph', (req, res) => {
    res.render('index.ejs', { key: "hex", acess: dados.length })
})
page.get('/jojostands', async(req, res) => {
    const stands = mongoose.model('posts', standSchema, 'posts')
    try {
        let data = await stands.find({})

        res.json(data)
    } catch (err) {
        console.log(err)
        res.sendStatus(501)
    }
})

page.get('/jojostands/stand/id/:id', async(req, res) => {
    if (!req.params.id) {
        return res.sendStatus(404)
    }
    const stands = mongoose.model('posts', standSchema, 'posts')
    try {
        let data = await stands.find({ id: req.params.id })
        res.json(data)
    } catch (err) {
        res.sendStatus(501)
    }
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