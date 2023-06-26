class Obj{
    constructor(x,y,w,h,attrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.attrib = attrib
    }

    dir = 0

    des_obj(){
         des.beginPath() //para iniciar e poder tonar um objeto
         des.lineWidth = '5' //espessura da linha
         des.fillStyle = this.attrib //cor da pintura
         des.strokeStyle = 'blue' //cor da linha
         des.moveTo(this.x,this.y) //posiciona o pincel
         des.lineTo(this.x+50,this.y) //risca uma linha até a posição indicada (x,y)
         des.lineTo(this.x+60,this.y+10) //risca uma linha até a posição indicada (x,y)
         des.lineTo(this.x+60,this.y+60) //risca uma linha até a posição indicada (x,y)
         des.lineTo(this.x+50,this.y+70) //risca uma linha até a posição indicada (x,y)
         des.lineTo(this.x+10,this.y+70) //risca uma linha até a posição indicada (x,y)
         des.lineTo(this.x,this.y+70) //risca uma linha até a posição indicada (x,y)
         des.lineTo(this.x-10,this.y+60) //risca uma linha até a posição indicada (x,y)
         des.lineTo(this.x-10,this.y+10) //risca uma linha até a posição indicada (x,y)
         des.closePath() //para fechar e poder tonar um objeto
         des.stroke() //risca a linha
         des.fill() //pinta a área
    }

    mover(){
        this.x += this.dir
    }
}

//classe carro

//classe estrada

//classe texto