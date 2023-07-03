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
         des.fillStyle = 'darkorange' //cor da pintura
         des.strokeStyle = 'orange' //cor da linha
         des.rect(this.x+55,this.y+60,this.w-45,this.h-15)
         des.closePath() //para fechar e poder tonar um objeto
         des.stroke() //risca a linha
         des.fill() //pinta a área

         des.beginPath() //para iniciar e poder tonar um objeto
         des.lineWidth = '5' //espessura da linha
         des.fillStyle = 'darkorange' //cor da pintura
         des.strokeStyle = 'orange' //cor da linha
         des.rect(this.x-10,this.y+60,this.w-45,this.h-15)
         des.closePath() //para fechar e poder tonar um objeto
         des.stroke() //risca a linha
         des.fill() //pinta a área

         des.beginPath() //para iniciar e poder tonar um objeto
         des.lineWidth = '5' //espessura da linha
         des.fillStyle = this.attrib //cor da pintura
         des.strokeStyle = 'blue' //cor da linha
         des.moveTo(this.x+15,this.y)
         des.lineTo(this.x+15,this.y-5)
         des.lineTo(this.x-10,this.y-5)
         des.lineTo(this.x-10,this.y-10)
         des.lineTo(this.x+60,this.y-10)
         des.lineTo(this.x+60,this.y-5)
         des.lineTo(this.x+35,this.y-5)
         des.lineTo(this.x+35,this.y)
         des.closePath() //para fechar e poder tonar um objeto
         des.stroke() //risca a linha
         des.fill() //pinta a área

         des.beginPath() //para iniciar e poder tonar um objeto
         des.lineWidth = '5' //espessura da linha
         des.fillStyle = 'darkorange' //cor da pintura
         des.strokeStyle = 'orange' //cor da linha
         des.rect(this.x-10,this.y+5,this.w-45,this.h-15)
         des.closePath() //para fechar e poder tonar um objeto
         des.stroke() //risca a linha
         des.fill() //pinta a área

         des.beginPath() //para iniciar e poder tonar um objeto
         des.lineWidth = '5' //espessura da linha
         des.fillStyle = 'darkorange' //cor da pintura
         des.strokeStyle = 'orange' //cor da linha
         des.rect(this.x+55,this.y+5,this.w-45,this.h-15)
         des.closePath() //para fechar e poder tonar um objeto
         des.stroke() //risca a linha
         des.fill() //pinta a área

         des.beginPath() //para iniciar e poder tonar um objeto
         des.lineWidth = '5' //espessura da linha
         des.fillStyle = this.attrib //cor da pintura
         des.strokeStyle = 'blue' //cor da linha
         des.rect(this.x,this.y,this.w,this.h)
         des.closePath() //para fechar e poder tonar um objeto
         des.stroke() //risca a linha
         des.fill() //pinta a área

         des.beginPath() //para iniciar e poder tonar um objeto
         des.lineWidth = '5' //espessura da linha
         des.fillStyle = this.attrib //cor da pintura
         des.strokeStyle = 'blue' //cor da linha
         des.moveTo(this.x,this.y+20)
         des.lineTo(this.x+50,this.y+20)
         des.lineTo(this.x+55,this.y+70)
         des.lineTo(this.x+-5,this.y+70)
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