// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "1. O que é uma variável em programação?",
      respostas: [
        { opcao: "a) Um container que armazena dados", correto: true },
        { opcao: "b) Um tipo de loop", correto: false },
        { opcao: "c) Um erro no código", correto: false },
        { opcao: "d) Um comando para imprimir textos", correto: false }
      ]
    },
    {
      pergunta: "2. Qual destes NÃO é um tipo de dado primitivo?",
      respostas: [
        { opcao: "a) String", correto: false },
        { opcao: "b) Number", correto: false },
        { opcao: "c) Array", correto: true },
        { opcao: "d) Boolean", correto: false }
      ]
    },
    {
      pergunta: "3. O que o comando console.log() faz em JavaScript?",
      respostas: [
        { opcao: "a) Exibe mensagens no console", correto: true },
        { opcao: "b) Cria uma variável", correto: false },
        { opcao: "c) Executa um loop", correto: false },
        { opcao: "d) Conecta-se a um banco de dados", correto: false }
      ]
    },
    {
      pergunta: "4. O que é uma API?",
      respostas: [
        { opcao: "a) Uma interface que permite comunicação entre sistemas", correto: true },
        { opcao: "b) Um tipo de banco de dados", correto: false },
        { opcao: "c) Uma linguagem de programação", correto: false },
        { opcao: "d) Um framework para construir apps", correto: false }
      ]
    },
    {
      pergunta: "5. Qual símbolo é usado para acessar propriedades de um objeto em JavaScript?",
      respostas: [
        { opcao: "a) ->", correto: false },
        { opcao: "b) .", correto: true },
        { opcao: "c) #", correto: false },
        { opcao: "d) &", correto: false }
      ]
    },
    {
      pergunta: "6. Para que serve o if em programação?",
      respostas: [
        { opcao: "a) Criar funções", correto: false },
        { opcao: "b) Tomar decisões com base em condições", correto: true },
        { opcao: "c) Repetir tarefas", correto: false },
        { opcao: "d) Declarar variáveis", correto: false }
      ]
    },
    {
      pergunta: "7. Qual método HTTP é usado para receber dados de uma API?",
      respostas: [
        { opcao: "a) GET", correto: true },
        { opcao: "b) POST", correto: false },
        { opcao: "c) DELETE", correto: false },
        { opcao: "d) PUT", correto: false }
      ]
    },
    {
      pergunta: "8. O que é um loop for?",
      respostas: [
        { opcao: "a) Uma função matemática", correto: false },
        { opcao: "b) Uma estrutura que repete ações até cumprir uma condição", correto: true },
        { opcao: "c) Um tipo de variável", correto: false },
        { opcao: "d) Um erro comum em programação", correto: false }
      ]
    },
    {
      pergunta: "9. Qual destes é um operador lógico?",
      respostas: [
        { opcao: "a) +", correto: false },
        { opcao: "b) =", correto: false },
        { opcao: "c) && (AND)", correto: true },
        { opcao: "d) /", correto: false }
      ]
    },
    {
      pergunta: "10. Qual formato de dados é comum em APIs?",
      respostas: [
        { opcao: "a) .exe", correto: false },
        { opcao: "b) JSON", correto: true },
        { opcao: "c) .mp3", correto: false },
        { opcao: "d) .txt", correto: false }
      ]
    }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();