var btnclicado = document.querySelector('#btn')

    btnclicado.addEventListener('click', clicado)
    //criando evento que dispara ao 'click' e chama a function clicado() 
        
        function clicado(){
            var data = new Date()
            var ano = document.querySelector('#iano')
            var anoHoje = data.getFullYear() //pegando o ano com todos os dígitos

            if(ano.value.length == 0 || Number(ano.value) > anoHoje){
                alert('[ERRO] Digite um ano válido!')
                //se o ano estiver vazio '0', ou o valor ano(.value) for maior que o ano que estamos vai dar erro
            }
            else{
                //se tudo estiver correto vamos calcular a idade, pega o sexo que pode vir como [0] ou [1] cheked e criar um elemento no documento com a tag img e setando pra ela um 'id' com valor 'foto'(mas ainda n está mostrando o elemento img).

                var idade = anoHoje - Number(ano.value)
                var sexo = document.getElementsByName('radioSex')
                var img = document.createElement('img')
                img.setAttribute('id', 'foto')
    
                var resultado = document.querySelector('#res')

                var genero = sexo[0].checked ? 'Homem' : 'Mulher'  

                if(sexo[0].checked){
                    // se sexo[0] estiver checado, significa que a caixa masculino está marcada
                    //genero ='Homem'
                    if(idade >=0 && idade <=12){
                        img.setAttribute('src', 'img/kidh.png')
                        //to dizendo que a a tag imagem vai receber uma 'src' e essa src vai conter 'img/kidh.png' 

                    }else if(idade <= 21){
                        //'idade >= 11 &&...' está subentendido; o mesmo serve para os outros ifs
                        img.setAttribute('src', 'img/jovemh.png')

                    }else if(idade <= 50){
                        img.setAttribute('src', 'img/adultoh.png')

                    }else if(idade >=51){
                        img.setAttribute('src', 'img/idosoh.png')

                    }
                }else{
                    // se sexo[1] estiver checado, significa que a caixa feminina está marcada
                   // genero ='Mulher'
                    if(idade >=0 && idade <=12){
                        img.setAttribute('src', 'img/kidm.png')
                        
                    }else if(idade <= 21){
                        img.setAttribute('src', 'img/jovemm.png')

                    }else if(idade <= 50){
                        img.setAttribute('src', 'img/adultom.png')

                    }else if(idade >=51){
                        img.setAttribute('src', 'img/idosam.png')
                        
                    }
                }

                // aqui ta claro oq estou fazendo e no final estou dizendo que quero mostrar a tag img que criei anteriormente na tela com padding de 20px

                resultado.style.textAlign = 'center'
                img.style.padding = '20px'
                resultado.innerHTML = `Seu gênero é ${genero} e idade é ${idade} anos!`
                resultado.appendChild(img) //
            }
        }