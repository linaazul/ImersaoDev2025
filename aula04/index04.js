function jogar(){
    // Arrays com os 3 vilões e personagens
    const personagens =  ["", "", ""]
    const viloes = ["", "", ""]

    //Constantes para manter o código organizado e mais fácil de alterar
    const FORCA_MAXIMA = 10
    const FORCA_MINIMA = 1
    const NUMERO_VILOES = 3
    const NUMERO_PERSONAGENS = 3

    //Variaveis de força
    let forcaPersonagem = 0
    let forcaViloes = 0

    // Array com os vilões disponiveis.
    const VILOES_POSSIVEIS = ["Broken Vessel", "God Tamer", "Grimm", "Radiance", "Hollow Knight", "Sly", "Nosk", "Soul Master", "White Defender", "Zote", "Hornet", "False Knight"]

    // Array contendo a copia de VILOES_POSSIVEIS
    const viloesDisponiveis = [...VILOES_POSSIVEIS]

    // Função para calcular força aleatória
    // É bom ter uma função desa pois ela se repete mais de uma vez no código.
    function calcularForca() {
        return Math.floor(Math.random() * FORCA_MAXIMA) + FORCA_MINIMA
    }

    // Cadastro dos personagens do jogador
    for (let index = 0; index < NUMERO_PERSONAGENS; index++) {
        const nome = prompt(`Digite o nome do personagem ${index + 1}:`)
        personagens.push(nome);
        forcaPersonagem += calcularForca();
    }
    alert("Personagens: " + personagens)


    // Seleção aleatória dos vilões
    for (let i = 0; i < NUMERO_VILOES; i++) {
        // Sorteia um índice
        const indiceAleatorio = Math.floor(Math.random() * viloesDisponiveis.length);
        // remove o vilão da lista disponível
        // .splice(indiceAleatorio, 1)[0] --> Splice é um método que nesse caso
        // serve para remover o item do indiceAleatorio. 
        // Esse ,1 é a quantidade  de itens que ele vai remover.
        //O [0] AQUI É ESSENCIAL porque o .splice() SEMPRE RETORNA UM ARRAY, 
        // mesmo quando removemos apenas um elemento. 
        const vilaoSelecionado = viloesDisponiveis.splice(indiceAleatorio, 1)[0]
        
        // .push --> envia a variavel para o array que contem os 3 viloes.
        viloes.push(vilaoSelecionado);
        forcaViloes += calcularForca();
    }
    alert("Vilões: " + viloes)

    // comparar as forças dos times para ver quem venceu
    if (forcaViloes < forcaPersonagem) {
        alert(`VITÓRIA!\nSeus personagens venceram com ${forcaPersonagem} de força!\nVilões tinham ${forcaViloes} de força.`);
    } else if (forcaPersonagem < forcaViloes) {
        alert(`DERROTA!\nOs vilões venceram com ${forcaViloes} de força.\nSeus personagens tinham ${forcaPersonagem} de força.`);
    } else {
        alert(`EMPATE!\nAmbos times terminaram com ${forcaPersonagem} de força.`);
    }
}