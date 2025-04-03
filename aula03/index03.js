function jogar(){
    //flag
    let ganhou = true 
    for(let nivelAtual = 1; nivelAtual <=3; nivelAtual++){
        console.log("Nivel: " + nivelAtual)
        
        const escolhaJogador = parseInt(
            prompt(
                "Nivel:"+nivelAtual+"\nEscolha um vidro. Digite 1, 2, ou 3."
            )
        )
        const pisoQuebrado = Math.floor(Math.random() * 3) + 1
        if (escolhaJogador >=4 || escolhaJogador <1 || isNaN(escolhaJogador)){
            alert("❌ Número inválido.\nPor favor, digite um número entre 1 e 3.")
        }else{
            if(escolhaJogador === pisoQuebrado){
                alert("🧨O vidro quebrou.\nVocê perdeu.")
                ganhou = false
                return
            } else{
                alert("Você passou!\nO vidro estava na casa " + pisoQuebrado)
            }
        }
    }
    if (ganhou == true){
        alert("🎊Parabéns, você conseguiu!🎊")
    }
}