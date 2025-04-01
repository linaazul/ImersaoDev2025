function escolha(){
    const IDADE = parseInt(prompt("Informe sua idade para continuar: "))
    if (IDADE < 18 || isNaN(IDADE)){
        alert("Você não pode jogar")
    }else{
        const jogadas = { 1: "Pedra", 2: "Papel", 3: "Tesoura" }
        const escolhaJogador = parseInt(prompt("Digite: '1' para Pedra, '2' para papel ou '3' para tesoura?"))
        const escolhaComputador = Math.floor(Math.random() * 3) + 1

        alert("O computador escolheu: "+ escolhaComputador)

        if (escolhaComputador === escolhaJogador){
            alert("Empate!", escolhaComputador)
        } else if(
        (escolhaComputador === 1 && escolhaJogador === 3) || 
        (escolhaComputador === 2 && escolhaJogador === 1) || 
        (escolhaComputador === 3 && escolhaJogador === 2)
        ) {
            alert("O computador venceu. \nComputador: " + jogadas[escolhaComputador] + "\nJogador: " + jogadas[escolhaJogador])
        } else if(
            (escolhaJogador === 1 && escolhaComputador === 3) ||
            (escolhaJogador === 2 && escolhaComputador === 1) ||
            (escolhaJogador === 3 && escolhaComputador === 2)
        ){
            alert("Você venceu. \nJogador: " + jogadas[escolhaJogador] + "\nComputador: " + jogadas[escolhaComputador])
        }else{
            alert("Escreva um número válido.")
        }
    }
}