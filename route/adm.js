const express = require('express');
const route = express();
const path = require("path")
const info = require('../src/data/info.json')
const dados = require('../src/data/dados.json');
const bodyParser = require('body-parser');

const fs = require('fs');

const color = ['\u001b[31m',
    '\u001b[34m',
    '\u001b[0m',
]

route.set("views", path.join(__dirname, '../views'))
route.set("view engine", "ejs")
route.use(express.static(path.join(__dirname, '../public')));
route.use(bodyParser.urlencoded({
    extended: true
}));

function savedata() {
    fs.writeFileSync('./src/data/dados.json', JSON.stringify(dados), (x) => { console.log('save and reload') })
}

function checkclass(req, res, next) {
    if (req.session.user.class != 'admin') {
        res.status(401).send('permissão negada!')
    } else {
        next()
    }
}
route.use('/del/:id', checkclass)
route.use('/edit/:id', checkclass)
route.use('/create', checkclass)
route.get('/', (req, res) => {
    res.render('admin.ejs', { acess: dados.length, data: dados, func: '/admin/create', obj: {} })

})

route.post('/create', (req, res) => {
    let obj = req.body
    obj.id = parseInt(Math.random() * 9999999)
    let msg = `user ${req.session.user.nick} create ${obj.name}`
    console.log(color[1] + msg + color[2] + '\n')
    dados.push(obj)
    savedata()

    res.redirect('/admin')
})

route.get('/del/:id', (req, res) => {
    const data = dados
    for (let i in data) {
        if (data[i].id == req.params.id) {
            msg = `user ${req.session.user.nick} delete ${data[i].name}`
            console.log(color[0] + msg + color[2])

            data.splice(i, 1)
            savedata()

            res.redirect('/admin')
        }
    }

})
route.get('/edit/:id', (req, res) => {
    let posi;
    const data = dados
    for (let i in data) {
        if (data[i].id == req.params.id) {
            posi = i
            let msg = `${req.session.user.nick} editar ${data[i].name}`
            console.log(msg)


        }
    }
    res.render('admin.ejs', { acess: dados.length, data: dados, func: `/admin/save/${data[posi].id}`, obj: data[posi] })

})
route.post('/save/:id', (req, res) => {
    const data = dados
    const obj = req.body

    for (let i in data) {
        if (data[i].id == req.params.id) {
            obj.id = data[i].id
            data[i] = obj
            let msg = `${req.session.user.nick} save ${data[i].name}`
            console.log(color[1] + msg + color[2])

            savedata()

            res.redirect('/admin')
        }
    }
})
route.get('/exit', (req, res) => {
    req.session.login = false
    req.session.user = undefined
    let msg = `exit user= ${req.session.user}`
    res.redirect('/')

})
module.exports = route