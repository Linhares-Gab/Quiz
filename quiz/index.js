// Array de objetos contendo perguntas, respostas e a resposta correta
const perguntas = [
  {
    pergunta: "O que significa DOM em JavaScript?",// Pergunta
    respostas: [
      "Documento Object Model",// Opção 1
      "Data Object Model",// Opção 2
      "Dynamic Object Model",// Opção 3
    ],
    correta: 0// Índice da resposta correta no array de respostas
  },
  // Outras perguntas e respostas seguem o mesmo padrão...
  {
    pergunta: "Qual é a função do método 'querySelector'?",
    respostas: [
      "Selecionar múltiplos elementos",
      "Selecionar um único elemento",
      "Modificar elementos HTML",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um 'callback' em JavaScript?",
    respostas: [
      "Um erro de sintaxe",
      "Uma função passada como argumento a outra função",
      "Uma variável global",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Não há diferença, ambos são iguais",
      "O primeiro compara apenas o valor, o segundo compara valor e tipo de dado",
      "Um é usado para comparação de strings e o outro para comparação de números",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador de negação lógica em JavaScript?",
    respostas: [
      "&",
      "|",
      "!",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "append()",
      "addToEnd()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'toFixed()' faz em JavaScript?",
    respostas: [
      "Arredonda um número para o inteiro mais próximo",
      "Formata um número com uma quantidade específica de casas decimais",
      "Converte um número para uma string",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'preventDefault()' em JavaScript?",
    respostas: [
      "Impede a execução de uma função",
      "Evita que um evento padrão ocorra",
      "Remove um elemento HTML do documento",
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma 'closure' em JavaScript?",
    respostas: [
      "Uma função que não retorna nada",
      "Um objeto que contém métodos",
      "Uma função aninhada que tem acesso ao escopo pai, mesmo após o escopo pai ter sido fechado",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
    respostas: [
      "Converte uma string em um número inteiro",
      "Converte um número em uma string",
      "Remove espaços em branco de uma string",
    ],
    correta: 0
  }
];


// Seleciona o elemento com o id 'quiz' no HTML
const quiz = document.querySelector('#quiz')
// Seleciona o elemento 'template' no HTML
const template = document.querySelector('template')


// Loop sobre cada objeto de pergunta no array 'perguntas'
for (const item of perguntas) {

  // Clona o conteúdo do template
  const quizitem = template.content.cloneNode(true)
  // Define o texto da pergunta dentro do template clonado
  quizitem.querySelector('h3').textContent = item.pergunta

  // Loop sobre cada resposta dentro do array de respostas da pergunta atual
  for (let resposta of item.respostas) {

      // Clona o elemento 'dt' que contém a estrutura da resposta
      const dt = quizitem.querySelector('dl dt').cloneNode(true)
      // Define o texto da resposta dentro do 'span' dentro do elemento clonado 'dt'
      dt.querySelector('span').textContent = resposta
    
    
      // Adiciona o elemento clonado 'dt', que representa uma resposta, como um filho do elemento 'dl', para exibir a resposta na lista de respostas da pergunta.
      quizitem.querySelector('dl').appendChild(dt)
  }

  //removendo o primeiro termo raido (Resposta A)
  quizitem.querySelector('dl dt').remove()
  // Adiciona o template clonado, com a pergunta, ao elemento com id 'quiz' no HTML
  quiz.appendChild(quizitem)
}


