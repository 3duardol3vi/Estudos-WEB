var a = 70
var v = 60

    if(a > v){
        console.log(`Você está acima da velocidade permitida; sua velocidade: ${a}km?/h, velocidade máxima permitida: ${v}`)
    }
    else{console.log('Velocidade aceitável')}

    var horaagora = new Date()
    var horas = horaagora.getHours()
    var minutos = horaagora.getMinutes()
    var segundos = horaagora.getSeconds()
    console.log(`São ${horas}:${minutos}:${segundos}`)


    //forma reduzida
    console.log(horaagora.toLocaleTimeString('pt-BR'))


    //switch case
    var dia = horaagora.getDay()
    
    switch(dia){
        case 0:
            console.log('Domingo')
        break
        case 1:
            console.log('Segunda')
        break
        case 2:
            console.log('Terça')
        break
        case 3:
            console.log('Quarta')
        break
        case 4:
            console.log('Quinta')
        break
        case 5:
            console.log('Sexta')
        break
        case 6:
            console.log('Sábado')
        break
        default:
            console.log('Dia Inválido')
        break
    }





    //pressione F8