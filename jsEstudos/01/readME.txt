#precendencia
    +, -, *, /, %(resto da divisao inteira), **(potencia)

    ordem de precedencia: (), 
    depois: **, 
    depois vem: *, /, % 
    e por ultimo: + e -


    atribuição: ++ --

    relacionais
    &lt;>, <, >=, <=, ==,!= &gt;
    
    todo resultado de uma operação com relacionais vai sair um resultado boolenado: true ou false</p>

    <p>para o javascript ele n testa o tipo da variavel, ex:<br>
    <strong>5 = 5 </strong>? resposta: <strong>true</strong>, assim como:<br>
    <strong>5 = '5'</strong> também é <strong>true</strong><br>
    e <strong>5 === '5'</strong>? resposta: false; === compara valor e tipo<br>
    e <strong>5 != '5'</strong>, false, e <strong>5 !== '5'</strong>(desigual restrito), true</p>
    
    Operadores Lógicos
    !(negação), &&(e, conjunção), ||(ou, disjunção)<br>
        !: operador unário, só tem um operando, ou boto true ou false <br>
        &&: segue a mesma lógica do 'E' no RLM, só é verdadeiro se ta a preposição for verdadeira<br>
        ||: mesma lógica do &&, mas é verdadeira se apenas uma for
    

    ****precedencia: aritmeticos, relacionais e depois os lógicos

    operador ternário
    ? e : estrutura do operador: teste lógico ? true : false
    ou seja se for verdadeiro(?) faz o que vem em seguida, se for falso(:) faz o que vem após o sinal :

    ex: media>=7 ? aprovado : reprovado

    -----------------------------------------------------------------

    DOM (document object model)

        Árvore DOM

            window (raiz do DOM)
        dentro do window: location, document, history
        dentro do document: html (parent)
        dentro de html: head e body (child de html e assim por diante)

    navegar pela minha arvore DOM
    por marca (tagName)- getElementByTagName('TAG')[]
        se eu colocar [0] após, posso escolher qual paragrafo quero buscar
    por ID - getElementById('')
    por nome - getElementsByName('')
    por classe - getElementsByClassName('')
    por seletor - querySelector('')
    
    -----------------------------------------------------------------

    REPETIÇÔES
    do while, while - While: Executa o loop enquanto a condição for verdadeira. Do While: Executa o loop primeiro e depois verifica a condição.


    for - for(inicio; teste; incremento)
        ex: for(let x = 0; x > 101; x++){}