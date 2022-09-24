const checkPoint = 600;
// let nav_bg = 'transparent';
let opacity = 1;
let btn_up = 'none';


window.addEventListener("scroll", () =>{
    
    const currentScroll = window.pageYOffset;
    if(currentScroll <= checkPoint) {
        // nav_bg = 'transparent';
        opacity = 1 - currentScroll / checkPoint;
        btn_up = 'none';
    }
    else {
        // nav_bg = 'rgba(255, 230, 1, 0.6)';
        opacity = 0;
        btn_up = 'inline'
    }

    // document.querySelector(".header-nav").style.backgroundColor = nav_bg;
    document.querySelector(".btn_up").style.display = btn_up;
});

const btnReview = document.getElementsByClassName('rewiew__btn')
const discription = document.querySelectorAll(".revew-hide")

for (let i = 0; i<btnReview.length; i++){
    btnReview[i].addEventListener('click', function(event){
        discription[0].classList.toggle('hide');
        discription[1].classList.toggle('hide');
        discription[2].classList.toggle('hide');
        discription[3].classList.toggle('hide');
        discription[4].classList.toggle('hide');
        discription[5].classList.toggle('hide');
    })
    
}

const menu = document.querySelector('.humburger');
const submenu = document.querySelector('.second-menu-mobile');
const close = document.querySelector('.close');
let is_open = 0;

menu.addEventListener('click', () => {
    if(!is_open) {
    submenu.style.display = 'block';
    is_open = 1;
    } else {
    submenu.style.display = 'none';
    is_open = 0;
    }

});

close.addEventListener('click', () => {
    if(!is_open) {
    submenu.style.display = 'block';
    is_open = 1;
    } else {
    submenu.style.display = 'none';
    is_open = 0;
    }

});

submenu.addEventListener('click', () => {
    if(!is_open) {
    submenu.style.display = 'none';
    is_open = 0;
    } 

});




// const hamburger = document.querySelector('.hamburger');
// const navsub = document.querySelector('.second-menu-mobile'); 

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle("change")
//     navsub.classList.toggle("nav-change") });



