

    function show(){
        let menuShow = document.querySelector('.menu-toggle')
        let menuList = document.querySelector('.mobile-menu')

        if(menuShow.classList.contains('open')){
            menuShow.classList.remove('open')
            menuList.classList.remove('on')
        }else{
            menuShow.classList.add('open')
            menuList.classList.add('on')

        }
    }