'''
  #JS

    Os programas nesta linguagem são chamados de scripts. 
    Eles podem ser escritos diretamente no HTML de uma página da web
    e executados automaticamente conforme a página é carregada.

    Os scripts são fornecidos e executados como texto simples.
    Eles não precisam de preparação ou compilação especial para serem executados.

    const  mensagem = "Hello World, "
    alert (mensagem + (10 + 100) + " codes")

    DOM
      O DOM (Document Object Model) representa o mesmo
      documento para que possa ser manipulado. O   DOM é uma
      representação orientada a objetos da página da web, que
      pode ser modificada com uma   linguagem de script como JavaScript.

    document.
      Serve para modelar o ducumento para JS(JavaScript) então transforma
      tudo no documento em um objeto js

    QuerySelector()
      Uma função de pesquisa

    Alert()
      uma função que imprime uma caixa de texto como se fosse uma notificação
      no navegador

    cloneNode()
      é usado em elementos do DOM (Document Object Model) para criar uma cópia exata desse elemento.
      Quando você invoca cloneNode(), você está criando uma cópia independente do elemento original,
      incluindo todos os seus atributos e nós filhos.
       ex:
        const template =document.querySelector('template')
        const quizitem = template.content.cloneNode()
        
        neste exemplo transformamos o template do THML
        para o JS e armazenamos ele na variavel template
        assim o template.clontent.cloneNode está copiando o 
        elemento template e seus filhos
        
    appendChild()
      é usado para adicionar um nó como um filho de outro nó no DOM (Document Object Model).
      Elebasicamente insere o nó especificado como o último filho do nó em que o método é chamado.
        ex:
            // Suponha que você tenha um elemento div no seu HTML
            const divPai = document.getElementById('divPai');

            // Crie um novo elemento parágrafo
            const novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = 'Este é um novo parágrafo adicionado usando appendChild().';

            // Adicione o novo parágrafo como um filho da div
            divPai.appendChild(novoParagrafo);
'''

'''
  #Array
    Os arrays são estruturas que servem para guardar dados, e organizá-los.
    É como se fosse uma estante de livro onde consegue guardar mais de um livro.
    []
    const perguntas = [
        "a", 0, 2.3,
      ] 
    alert(perguntas) resposta = a 0 2.3
    alert(perguntas[0]) resposta = a
'''

'''
  #Objetos
    Objetos em programação são uma forma de representar coisas ou conceitos no contexto de um programa.
    Permitem a criação de um código minimalista a partir de módulos reutilizáveis. 

      const celular = {
        cor: 'preto',
        marca: 'sansung',
        peso : 200

      }
      alert(celular.marca) = resposta samsung
      alert(celular.cor) = resposta preto
      alert(celular.peso) = resposta 200
        
        
        
        
        const perguntas = [
          {
            pergunta: "Pergunta 01",
            respostas: [
              "Resposta A",
              "Resposta B",
              "Resposta C",
            ],
            correta: 2
          }
        ]
      alert(perguntas[0].respostas[perguntas[0].correta])

    neste caso .resposta[perguntas[0].correta] irá retornar 2
    logo ficará resposta[2] = "resposta c"
'''

'''
  #For
    for (const item of perguntas) {
      alert(item.pergunta)
      }
    neste caso chamamos um loop (laço de repetição)
    aonde criamos uma variavel chamada item aonde: 
    ele é uma variável que representa cada elemento do array perguntas em cada iteração do loop.
    O for...of loop em JavaScript é projetado para iterar sobre os elementos de uma coleção,
    como um array, diretamente, em vez de exigir um contador numérico separado.
    Então, em cada iteração, item é atribuído ao próximo elemento do array perguntas.

    for (let i = 0; i < 5; i++) {
      console.log(i);
      }
    
    Em JavaScript, a palavra-chave let é usada para declarar variáveis locais.
    Isso significa     que a variável declarada com let só é acessível dentro
    do bloco onde ela é declarada. O for em conjunto com let é frequentemente
    usado para definir a variável de iteração em loops.
    Portanto, o for com let é uma maneira conveniente de declarar uma variável de
    iteração que só é acessível dentro do bloco do loop e tem escopo limitado à
    sua execução. Isso é útil para evitar conflitos de nomes de variáveis e manter
    o código mais organizado.

'''