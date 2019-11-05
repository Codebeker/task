function nav (){
    let burger = document.getElementById('burger-icon');
    let nav = document.querySelector('.menu-hide');

    burger.addEventListener('click',function(){
        nav.classList.toggle('menu-act');
    })
}

nav ();



