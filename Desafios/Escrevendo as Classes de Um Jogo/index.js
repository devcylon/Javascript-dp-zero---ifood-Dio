class Heroi{
    constructor(nome , idade , tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        if(tipo == "guerreiro"){
          this.tipoAtaque = "espada"  
        }
        else if(tipo == "mago"){
          this.tipoAtaque = "magia"  
        }
        else if(tipo == "monge"){
          this.tipoAtaque = "artes marciais"  
        }
        else if(tipo == "ninja"){
          this.tipoAtaque = "shuriken"  
        }
    }
    atacar(){
        console.log(" O " + heroi.tipo + " Atacou usando " + this.tipoAtaque)
    }
}
let heroi = new Heroi("Cylon",10, "guerreiro")
console.log(heroi.atacar())