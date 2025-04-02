function escolha(){
    const IDADE = parseInt(prompt("Informe sua idade para continuar: "))
    if (IDADE < 18 || isNaN(IDADE)){
        alert("Você não pode jogar")
    }else{
        // objeto jogadas criado para não repetir texto e deixar o código limpo
        const jogadas = { 
            1: "Pedra", 
            2: "Papel", 
            3: "Tesoura" 
        }
        const escolhaJogador = parseInt(prompt("Digite: '1' para Pedra, '2' para papel ou '3' para tesoura?"))
        // math.floor para arrendondar o resultado.
        // math.random para pegar um número aleatorio entre 0 e 0.999
        // multiplica por 3 para que o valor máximo chegue em 2 e soma um
        // para ir de 0 a 2 para 1 a 3
        const escolhaComputador = Math.floor(Math.random() * 3) + 1

        alert("O computador escolheu: "+ escolhaComputador)

        // condição caso empate
        if (escolhaComputador === escolhaJogador){
            alert("Empate!", escolhaComputador)

            // condições caso o computador ganhe
        } else if(
            (escolhaComputador === 1 && escolhaJogador === 3) || 
            (escolhaComputador === 2 && escolhaJogador === 1) || 
            (escolhaComputador === 3 && escolhaJogador === 2)
        ) {
            alert("O computador venceu. \nComputador: " + jogadas[escolhaComputador] + "\nJogador: " + jogadas[escolhaJogador])

            // condições caso o jogador ganhe
        } else if(
            (escolhaJogador === 1 && escolhaComputador === 3) ||
            (escolhaJogador === 2 && escolhaComputador === 1) ||
            (escolhaJogador === 3 && escolhaComputador === 2)
        ){
            alert("Você venceu. \nJogador: " + jogadas[escolhaJogador] + "\nComputador: " + jogadas[escolhaComputador])

            // caso entre nessa condição o jogador digitou algo errado
        }else{
            alert("Escreva um número válido.")
        }
    }
}