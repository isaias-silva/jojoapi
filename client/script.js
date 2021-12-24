

const banner = document.getElementById('banner')
const link = document.getElementById('link');
const guide = document.getElementById('guide');
const graph = document.getElementById('graph');
const standsblocks = document.getElementById('standsblocks');



if (standsblocks) {
    const url = 'http://localhost:8080/jojostands/apit'

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {

        /*   <div class="standbloco">
                          <img src="https://i.ibb.co/P11b50Q/ZaWarudo.png">
                         <div class="control">
                             <a href="admin/delete">
                                <button>deletar</button>
                             </a>
                    <button>editar</button>
                    </div>
                    </div>*/
        for (let i in data) {
            //standbloco
            let standblock = document.createElement('div');
            standblock.setAttribute('class', 'standbloco')
            //img
            let img = document.createElement('img')
            img.setAttribute('src', data[i].img)
            //control
            let control = document.createElement('div')
            control.setAttribute('class', 'control')
            //delete

            let buttondel = document.createElement('button')
            buttondel.setAttribute('value', data[i].id)
            buttondel.setAttribute('onclick', 'del(this.value)')
            //edit
            let linktopo = document.createElement('a')
            linktopo.href = '#topo'
            let buttonedit = document.createElement('button')

            buttonedit.setAttribute('value', data[i].id)
            buttonedit.setAttribute('onclick', 'edit(this.value)')

            standsblocks.appendChild(standblock)
            standblock.appendChild(img)
            standblock.appendChild(control)
            control.appendChild(buttondel)

            control.appendChild(linktopo)
            linktopo.appendChild(buttonedit)
            buttonedit.innerHTML = 'edit'
            buttondel.innerHTML = 'delete'
        }
    })
}

function edit(v) {
    const url = 'http://localhost:8080/jojostands/apit'
    const standname = document.getElementById('standname')
    const user = document.getElementById('standuser')
    const desc = document.getElementById('description')
    const img = document.getElementById('img')
    const color = document.getElementById('color')

    const button = document.getElementById('submite')
    const buttonres = document.getElementById('reset')

    const power = document.getElementById('power')
    const speed = document.getElementById('speed')
    const range = document.getElementById('range')
    const durability = document.getElementById('durability')
    const precision = document.getElementById('precision')
    const potential = document.getElementById('potential')

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        for (let i in data) {
            if (v == data[i].id) {

                standname.value = data[i].name;
                user.value = data[i].user;
                desc.value = data[i].desc;
                img.value = data[i].img;
                color.value = data[i].color;

                power.value = data[i].power;
                speed.value = data[i].speed;
                range.value = data[i].range;
                durability.value = data[i].durability;
                precision.value = data[i].precision;
                potential.value = data[i].potential;

                buttonres.setAttribute('type', 'button')
                buttonres.setAttribute('onclick', `re()`)
                button.setAttribute('type', 'button')
                button.setAttribute('onclick', `save(${v})`)
                button.value = 'salvar';
                buttonres.value = 'voltar'

            }
        }
    })


}

function re() {
    document.getElementById('standname').value = ''
    document.getElementById('description').value = ''
    document.getElementById('color').value = ''

    document.getElementById('submite').value = ''
    document.getElementById('reset').value = ''

    document.getElementById('power').value = '150,35'
    document.getElementById('speed').value = '220,55'
    document.getElementById('range').value = '220,95'
    document.getElementById('durability').value = '150,112'
    document.getElementById('precision').value = '85,95'
    document.getElementById('potential').value = '80,55'






    const button = document.getElementById('submite')
    const buttonres = document.getElementById('reset')
    button.setAttribute('type', 'submit')
    buttonres.setAttribute('type', 'reset')
    button.value = 'criar';
    buttonres.value = 'reset'
    button.removeAttribute('onclick')
}


function save(id) {
    alert(id)
    const standname = document.getElementById('standname')
    const user = document.getElementById('standuser')
    const desc = document.getElementById('description')
    const img = document.getElementById('img')
    const color = document.getElementById('color')

    const power = document.getElementById('power')
    const speed = document.getElementById('speed')
    const range = document.getElementById('range')
    const durability = document.getElementById('durability')
    const precision = document.getElementById('precision')
    const potential = document.getElementById('potential')

    let obj = {
        name: standname.value,
        user: user.value,
        desc: desc.value,
        img: img.value,
        color: color.value,
        power: power.value,
        speed: speed.value,
        range: range.value,
        durability: durability.value,
        precision: precision.value,
        potential: potential.value

    }
   


    axios.put(`http://localhost:8080/admin/update${id}`, obj).then((x) => { location.reload() })



}
function del(v) {

    axios.delete(`http://localhost:8080/admin/delete${v}`)
    location.reload()
}
if (guide) {

    const url = 'http://localhost:8080/jojostands/apit'

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        for (let i in data) {
            const standguideA = document.getElementById('standsguide')
            let standguide = document.createElement('div');
            standguide.setAttribute('class', 'std')
            let title = document.createElement('h4')
            let img = document.createElement('img')
            img.setAttribute('src', data[i].img)
            img.setAttribute('alt', 'imagepk')
            standguideA.appendChild(standguide)
            standguide.appendChild(img);
            standguide.appendChild(title);
            standguide.style.borderColor = data[i].color
            title.innerHTML = data[i].name;
            title.style.background = data[i].color;



        }


    })
}



if (banner) {
    banner.addEventListener(onload, connect())
}

function connect() {
    const url = 'http://localhost:8080/info'

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        let i = 0
        let users = document.getElementById('users')

        const interval = setInterval(() => {
            i++

            users.innerHTML = i
            if (i >= data.acess) {

                users.style.fontSize = '40px'
                users.style.textShadow = '2px 2px 2px yellow'
                clearInterval(interval)
            }
        }, 10)

        if (link) {
            link.value = data.link;
        }


    }).catch((X) => { alert(X) })

}