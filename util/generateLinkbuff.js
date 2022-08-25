const fs= require('fs')
const path= require('path')
module.exports= async (data)=>{
    const array=[]

data.map((item,x)=>{
    let id=(Math.random()*36).toString();
    fs.writeFileSync(path.resolve('temp',`img${x}.png`),item.img)
    let newItem=item
    newItem.img=path.resolve('temp',`img${x}.png`)
    array.push(newItem)
    console.log(item.name)
})
return array
}