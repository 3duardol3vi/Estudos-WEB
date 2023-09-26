// AULAS DE VETORES: DICAS

// CRIANDO UM VETOR var vetor = []

var vetor = [1, 3, 8, 536, 45, 42, 69]

// criei um vetor(array/obj) com todos esses numeros

// se eu quiser adicionar um numero ao vetor na ultima posição eu digo num.push(numero desejado) ex: vetor.push(999) significa que vai adicionar uma nova casa no vetor com valor de 999

vetor.push(999)

console.log(`mostrando vetor e adicionando 999 ao final: ${vetor}`)

// ------------------------------------------------------------------


//COLOCANDO OS NUMEROS EM ORDEM:
// para colocar em ordem basta escrever vetor.sort()

// vetor.sort()

// O sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

// Se for 0 indica que são iguais
// Se for -1 indica que o primeiro valor é menor
// Se for 1, o segundo é menor.



vetor.sort()
console.log(`mostrando vertor na ordem incompleta: ${vetor}`) //mostrando a ordenação incompleta

// ------------------------------------------------------------------




vetor.sort((a, b) => a - b); // COLOCANDO NA ORDEM QUANDO TEM MAIS DE DUAS CASAS DECIMAIS
console.log(`na ordem completa: ${vetor}`) // mostrando completa

// ------------------------------------------------------------------




// OU function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
// vetor.sort(comparaNumeros);




// ------------------------------------------------------------------

//OU

var ex = ["maria", "joao", "bruno", "leandro", "zoto"]

//METODO QUE ACHEI MLHR NO MOMENTO PQ FUNCIONA PARA OBJS APENAS PRECISO DIZER OQ QUERO< SE É NOME, ID, ETC; ex.nome; ex.id etc

ex.sort(function(a, b) {
    if(a < b){ // se quiser em ordem decrescente mudo para >
        return -1
    }
    else{
        return true
    }
})
console.log(`ordem completa mas utilizando metodo diferente: ${ex}`)



// ------------------------------------------------------------------




console.log(`ordem decrescente: ${vetor.reverse()}`) // mostrando em ordem decrescente


//PARA COLOCAR EM DECRESCENTE PRIMEIRO ORDENA COM SORT E DPS USA O REVERSE
//EX: vetor.sort(); vetor.reverse();



// ------------------------------------------------------------------


//PERCORRENDO VERTOR COM FOR E FOR IN

vetor.reverse() // colocando em ordem crescente de novo

for(let x=0; x < vetor.length; x++){
console.log(`percorrendo vetor na posição ${x} e valor de ${vetor[x]}`)

}



// ------------------------------------------------------------------


// COM FOR IN
console.log('FOR IN')
for(let z in vetor){
    console.log(`POSICAO ${z}: VALOR: ${vetor[z]}`)
}

// USANDO vetor.indexOf()
// SIGNIFICADO => QUERO PROCURAR DENTRO DO MEU VETOR SE EXISTE UM VALOR, SE SIM VAI RETORNAR O NUMERO DA POSIÇÃO QUE ELE SE ENCONTRA, SE NÃO ELE VAI RETORNAR -1
//EX: quero saber se tem o numero 8 no vetor, ent: vetor.indexOf(8), o numero existe sim dentro do vetor ent vai me retornar indice 2; caso indexOf(13). 13 n tem dentro do vetor ent vai retornar -1

let posicao = vetor.indexOf(8)

if(posicao == -1){
    console.log(`O NUMERO NAO FOI ENCONTRADO! ${posicao}`)
}else{console.log(`O VALOR ESTA NA POSICAO(INDICE) ${posicao}`)}



// ------------------------------------------------------------------
//REMOVENDO NUMEROS DE UMA STRING COM EXPRESSAO REGULAR

var stringExemplo = "Os números 12 devem ser descartados 34 da string.";
var resultado = stringExemplo.split(/\d+/);


