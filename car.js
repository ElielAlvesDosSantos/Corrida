let des = document.getElementById('des').getContext('2d')

//definição das instâncias
const c1 = new Obj(260,480,60,60,'orange')

//definição dos textos

//definição das instâncias do som

//controle de movimentação
document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        c1.dir -=1
    }
    else if(event.key === 'd'){
        c1.dir +=1
    }
})

document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        c1.dir = 0
    }else if(event.key === 'd'){
        c1.dir = 0
    }
})

//game over

//pontos

//colisão

function desenha(){
    c1.des_obj()
}

function atualiza(){
    c1.mover()

}

//principal
function main(){
    des.clearRect(0,0,600,600)
    atualiza()
    desenha()
}

setInterval(main,10)