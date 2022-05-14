const fs=require('fs')
const path=require('path')
const logging=async function(msg){
const caminho=   path.resolve(__dirname,"cache","info.log")
const msgfinal=`\n [${new Date().toUTCString()}]===> ${msg}`    
fs.open(caminho,'r',(err,fd)=>{
   if(err){
        if(err.code=='ENOENT'){
        console.error('Arquivo não existe CRIANDO:');
      return fs.appendFileSync('info.log',msgfinal);
    }}
})
return fs.appendFileSync(caminho,msgfinal)
}

module.exports ={logging:logging}