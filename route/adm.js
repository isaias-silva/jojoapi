const express = require('express');
const route = express();
const path = require("path")
const info=require('../src/data/info.json')
const dados=require('../src/data/dados.json');
const bodyParser=require('body-parser')

const color=['\u001b[31m',
 '\u001b[34m',
 '\u001b[0m',]

route.set("views", path.join(__dirname,'../views'))
route.set("view engine", "ejs")
route.use(express.static(path.join(__dirname , '../public')));
route.use(bodyParser.urlencoded({
    extended: true
  }));
  function savedata(){
    fs.writeFileSync('../src/data/dados.json',JSON.stringify(dados),(x)=>{console.log('save and reload')})
}
route.get('/',(req,res)=>{
    res.render('admin.ejs',{acess:dados.length,data:dados})

})





route.post('/create',(req,res)=>{
    console.log(color[1]+`${req.session.user} create ${req.body.name}`+color[2])
    dados.push(req.body)
res.redirect('/admin')
})

route.get('/del/:id',(req,res)=>{
   const data=dados
    for(let i in data){
        if (data[i].id==req.params.id){
            console.log(color[0]+`${req.session.user} delete ${data[i].name}`+color[2])
            
            data.splice(i,1)
         
            res.redirect('/admin')
        }
    }
  
})
route.get('/exit',(req,res)=>{
    req.session.adm=false
    req.session.user=undefined
    res.redirect('/')

})
module.exports=route
