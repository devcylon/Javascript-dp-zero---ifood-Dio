let nome = "Cylon"
let quantidadeDeExperiencia = 3000
let nivel

if(quantidadeDeExperiencia <= 1000){
    nivel = "ferro"
}
else if(quantidadeDeExperiencia >1000 && quantidadeDeExperiencia <=2000){
    nivel ="Bronze"
}
else if(quantidadeDeExperiencia >2000 && quantidadeDeExperiencia <=5000){
    nivel ="Prata"
}
else if(quantidadeDeExperiencia >5000 && quantidadeDeExperiencia <=7000){
    nivel ="Ouro"
}
else if(quantidadeDeExperiencia >7000 && quantidadeDeExperiencia <=8000){
    nivel ="Platina"
}
else if(quantidadeDeExperiencia >8000 && quantidadeDeExperiencia <=9000){
    nivel ="Ascendente"
}
else if(quantidadeDeExperiencia >9000 && quantidadeDeExperiencia <=10000){
    nivel ="Imortal"
}
else{
    nivel ="Radiante"
}
console.log("O Herói de nome " + nome + "está no nível de " + nivel)
