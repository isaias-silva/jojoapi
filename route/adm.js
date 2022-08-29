const express = require('express');
const route = express();
const path = require("path")
const info = require('../src/data/info.json')


const { create, deleteOne, consultOne, updateOne, consult } = require('../model/stands');
const adminAcess = require('../middlewares/adminAcess');
let dados = []


route.use(express.static(path.join(__dirname, '../public')));

route.use(async(req, res, next) => {
    dados = await consult()
    next()
})

route.get('/', (req, res) => {

    res.render('admin.ejs', { acess: dados.length, data: dados, func: '/admin/create', obj: {} })

})

route.post('/create', async(req, res) => {
        let obj = req.body
        obj.id = parseInt(Math.random() * 9999999)


        try {

            const result = await create(obj)
            if (!result) {
                res.sendStatus(500)
            }
            res.redirect('/admin')
        } catch (err) {
            res.sendStatus(501)
        }

    })
    //parei aqui
route.get('/del/:id', adminAcess, async(req, res) => {
    try {
        const result = await deleteOne(req.params.id)
        if (!result) {
            res.sendStatus(500)
        }
        res.redirect('/admin')
    } catch {
        res.sendStatus(501)
    }
})
route.get('/edit/:id', adminAcess, async(req, res) => {
    const data = await consultOne(req.params.id)
    if (!data) {
        res.sendStatus(501)
    }
    res.render('admin.ejs', { acess: dados.length, data: dados, func: `/admin/save/${data.id}`, obj: data })

})
route.post('/save/:id', adminAcess, async(req, res) => {
    const obj = req.body
    const result = await updateOne(req.params.id, obj)
    if (!result) {
        res.sendStatus(500)
    }
    res.redirect('/admin')

})

route.get('/exit', (req, res) => {
    req.session.login = false
    req.session.user = undefined
    let msg = `exit user= ${req.session.user}`
    res.redirect('/')

})
module.exports = route