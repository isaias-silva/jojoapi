const express = require('express');
const route = express();
const path = require("path")
const info=require('../src/data/info.json')
const dados=require('../src/data/dados.json')

route.set("views", path.join(__dirname,'../views'))
route.set("view engine", "ejs")
route.use(express.static(path.join(__dirname , '../public')));


route.get('/',(req,res)=>{
    res.render('admin.ejs',{acess:info.acess,data:dados})

})

module.exports=route
