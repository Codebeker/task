const sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
let curent = 0;



function reset(){
    for(let i=0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}
function startSlide(){
    reset();
    sliderImages[0].style.display = 'flex'
}
function slideLeft(){
    reset();
    sliderImages[curent-1].style.display = 'flex';
    curent--;
}
function slideRight(){
    reset();
    sliderImages[curent+1].style.display = 'flex';
    curent++;
}

arrowLeft.addEventListener('click',function(){
    if(curent === 0){
        curent = sliderImages.length;
    }
    slideLeft();
})

arrowRight.addEventListener('click',function(){
    if(curent===sliderImages.length -1){
        curent = -1;
    }
    slideRight();
})

startSlide();



