function CalcularRankeada(vitorias = 0, derrotas = 0){
    let pontos = vitorias - derrotas
    let nivel
    if(pontos <=10){
        nivel ="Ferro"
    }
    else if(pontos > 10 && pontos <= 20){
        nivel ="Bronze"
    }
    else if(pontos > 20 && pontos <= 50){
        nivel ="Prata"
    }
    else if(pontos > 50 && pontos <= 80){
        nivel ="Ouro"
    }
    else if(pontos > 80 && pontos <= 90){
        nivel ="Diamante"
    }
    else if(pontos > 90 && pontos <= 100){
        nivel ="BLendário"
    }
    else{
    nivel = "Imortal"
    }
    dados = [pontos, nivel]
    return dados
    
}
nivel = CalcularRankeada(30,5)
console.log(dados)
console.log("O Herói tem de saldo de " + dados[0] + " está no nível de "+ dados[1])
