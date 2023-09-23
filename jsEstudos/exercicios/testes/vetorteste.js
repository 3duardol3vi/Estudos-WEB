var texto = "jose afonso de sousa azevedo doido pertubado"
var t = []
var z = 0
var trocar

    // for(var x=0; x<=texto.length; x++){
    //     if(texto[x] == ' '){
    //          z = x-1
    //          for(z in texto){
    //             trocar[z] = texto[z]
    //          }
    //          t.push(trocar)
    //         trocar = ''

    //     }
    // }

    trocar = texto.split(" ")

    console.log(trocar)


    var cpf = '078.085.283-40'
    var nome = "JoãO gouLaRte AlcaNTaRa"
    
    var n = nome.replace(/[a-z]/gi, '1')

    var as = cpf.replace(/[.-]/g, '')
    console.log(as)
    console.log(n)

