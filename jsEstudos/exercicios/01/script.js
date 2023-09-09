
function carregar(){
    var msg = document.querySelector('#msg')
    var imagem = document.querySelector('#imagem')

    var tempo = new Date()
    var hora = tempo.getHours()

    if(hora >= 0 && hora <= 11){
        imagem.src = 'manhaC.png'
        msg.innerHTML = `Agora são ${hora}h!`
        document.body.style.background = '#e2cd9f'
        
    }else if(hora >= 12 && hora <= 18){
        imagem.src = 'tardeMC.png'
        msg.innerHTML = `Agora são ${hora}h!`
        document.body.style.background = '#b9846f'

    }else{
        imagem.src = 'noite2MC.png'
        msg.innerHTML = `Agora são ${hora}h!`
        document.body.style.background = '#515154'

    }
}