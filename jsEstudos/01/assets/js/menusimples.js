


function menuShow(){
    let show = document.querySelector('.mobile-menu')
    
    
    
        if(show.classList.contains('open')){
            show.classList.remove('open')
            document.querySelector('.menu-icon').src = "assets/img/menu_white_36dp.svg"

        }else{
            show.classList.add('open')
            document.querySelector('.menu-icon').src = "assets/img/close_white_36dp.svg"
        }
}