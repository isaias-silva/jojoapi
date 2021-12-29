const express = require('express');
const server = express();
const bodyParser=require('body-parser')
const port = process.env.PORT || 8080;
const session = require('express-session')
const path = require("path")
const dados=require('./src/data/dados.json')
const info=require('./src/data/info.json')
const adm=require('./route/adm')
const fs=require('fs');
const authentific=require('./src/authentific')

server.use(session({ secret: 'adkaskfaokfoaskfoakf', resave: true, saveUninitialized: true }))
server.use(bodyParser.urlencoded({
    extended: true
  }));
function savedata(){
    fs.writeFileSync('./src/data/dados.json',JSON.stringify(dados),(x)=>{console.log('save and reload')})
}
function saveinfo(){
    fs.writeFileSync('./src/data/info.json',JSON.stringify(info),(x)=>{console.log('save and reload')})
}  
function restrict(req, res, next) {
    if (req.session.adm == true) {
        if(req.session.user==undefined){
            res.status(401).end();
        }else{next();}
          
    } else {

          res.status(401).end();
    }
}

//header


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')//quem pode acessar a api
    res.header('Acess-Control-Allow-Headers', 'Origin,X-Requrested-With ,Content-Type, Accept,Autorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATH,DELETE,GET')//CRUD
        return res.status(200).send({});//resposta
    }


    next();

}

)
server.use((req, res, next) => {
   
    next()
})

server.use(express.static(__dirname + '/public'));
server.use('/admin',restrict,adm)
server.get('/',(req,res)=>{
    res.render('index.ejs',{key:"home",acess:info.acess,linkapi:info.github})
})

server.get('/howtouse',(req,res)=>{
    res.render('index.ejs',{key:"how",acess:info.acess})
})

server.get('/about',(req,res)=>{
    res.render('index.ejs',{key:"about",acess:info.acess})
})
server.get('/hexagraph',(req,res)=>{
    res.render('index.ejs',{key:"hex",acess:info.acess})
})
server.get('/jojostands',(req,res)=>{
    info.acess+=1
    saveinfo()
    res.send(dados)
})
server.get('/jojostands/stand/number/:n',(req,res)=>{
    if(dados[req.params.n]==undefined){
        res.status(404).send()
    }else{
        info.acess+=1
        saveinfo()
    res.send(dados[req.params.n])}
})
server.get('/jojostands/stand/id/:id',(req,res)=>{
    for(let i in dados){
        info.acess+=1
        if(dados[i].id==req.params.id){
           saveinfo()
            res.send(dados[i])
        }
    }
    res.status(404).send()
})
server.get('/guide',(req,res)=>{
    res.render('index.ejs',{key:"guide",acess:info.acess,data:dados})
})
//adminrender#####################################
server.get('/login',(req,res)=>{

    res.render('login-adm.ejs')

})
server.post('/aut',(req,res)=>{
   authentific(req.body).then((x)=>{
       if(x!=false){
           req.session.adm=true
           req.session.user=x.user
           res.redirect('/admin/')
       }
   })
})





//admin#####################################

server.use((req, res, next) => {
    const erro = new Error("not found");
    erro.status = 404;
    next(erro);
})

server.use((erro, req, res, next) => {
    res.status(erro.status || 500)
    return res.render('erro.ejs',{erro:erro.status,msg:erro})



})









server.listen(port, () => { console.log(`servidor funcionando na porta ${port}`) })