let i = 1;
const teams = [{
        name: 'Julian Harrington',
        position: 'Art Director',
        about: "Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
        photo: '/img/carousel2/team1.png'
    },
    {
        name: 'Roman Beker',
        position: 'CEO',
        about: "Have you ever had a problem with a burned light?We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
        photo: '/img/carousel2/team2.jpg'
    },
    {
        name: 'Pasha Drozd',
        position: 'Manager',
        about: "Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb.",
        photo: '/img/carousel2/team3.jpg'
    }
]

let name = document.getElementById('t-name');
let position = document.getElementById('t-position');
let about = document.getElementById('t-about');
let photo = document.getElementById('t-photo');

let photoNext = document.getElementById('photo-next');
let photoPrev = document.getElementById('photo-prev');
let nameNext = document.getElementById('name-next');
let namePrev = document.getElementById('name-prev');

let right = document.querySelector('.button-left');
let left = document.querySelector('.button-right');

function show() {
    name.innerHTML = teams[i].name;
    position.innerHTML = teams[i].position;
    about.innerHTML = teams[i].about;
    photo.src = teams[i].photo;
}



function check() {
    switch (i) {
        case 0:
            photoNext.src = teams[i + 1].photo;
            photoPrev.src = '';
            nameNext.innerHTML = teams[i + 1].name;
            namePrev.innerHTML = '';
            break;
        case 1:
            photoNext.src = teams[i + 1].photo;
            photoPrev.src = teams[i - 1].photo;
            nameNext.innerHTML = teams[i + 1].name;
            namePrev.innerHTML = teams[i - 1].name;
            break;
        case 2:
            photoNext.src= '';
            photoPrev.src = teams[i - 1].photo;
            nameNext.innerHTML = '';
            namePrev.innerHTML = teams[i - 1].name;
            break;
    }
}

photo.classList.remove("run-animation");



    right.addEventListener('click', function () {
        if(i===teams.length){
            return;
        }else{
        i++;
        check ();
        show();
        }
        
    })

    left.addEventListener('click', function () {
        if(i===0){
            return;
        }else{
        i--;
        check ();
        show();
        }
    })

    show();
    check();