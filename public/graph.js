const submit = document.querySelector("#crear")
submit.addEventListener("click",setGraf)
function setGraf() {
const graf = document.getElementById("status");

let ctx = graf.getContext("2d");
let p = document.getElementById('potential').value.split(",").map((x)=>{return parseInt(x)})
let pr = document.getElementById('precision').value.split(",").map((x)=>{return parseInt(x)})
let dur = document.getElementById('durability').value.split(",").map((x)=>{return parseInt(x)})
let rag = document.getElementById('range').value.split(",").map((x)=>{return parseInt(x)})
let vel =document.getElementById('speed').value.split(",").map((x)=>{return parseInt(x)})
let power = document.getElementById('power').value.split(",").map((x)=>{return parseInt(x)})

ctx.clearRect(0, 0, graf.width, graf.height);
ctx.fillStyle = document.querySelector("#color").value
ctx.beginPath();
ctx.strokeStyle = "white";
//potencial


 ctx.lineTo(p[0],p[1]);

ctx.lineTo(pr[0], pr[1]);
//precision

ctx.lineTo(dur[0], dur[1]);
//durabilidade

ctx.lineTo(rag[0], rag[1]);
//range

ctx.lineTo(vel[0], vel[1]);
//velocidade

ctx.lineTo(power[0], power[1]);
//poder

ctx.lineTo(p[0], p[1]);

ctx.fill();

ctx.closePath();

ctx.stroke();}