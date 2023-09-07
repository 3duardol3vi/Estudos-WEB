

    function show(){
        let menuShow = document.querySelector('.menu-toggle')
        let menuList = document.querySelector('.mobile-menu')

        if(menuShow.classList.contains('open')){
            menuShow.classList.remove('open')
            menuShow.classList.remove('rotate-toggle')
            menuList.classList.remove('on')
        }else{
            menuShow.classList.add('open')
            menuShow.classList.add('rotate-toggle')
            menuList.classList.add('on')

        }
    }