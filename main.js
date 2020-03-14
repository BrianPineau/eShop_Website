
const headerCollapse = document.querySelector('header');
const moveIcons = document.querySelector('.icon-set');
const openButton = document.querySelector(".toggler");

/*  Header Scroll Pop Out  */
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 40) {
        headerCollapse.classList += ' pop-out';
        moveIcons.classList += ' icon-move';
    } else {
        headerCollapse.classList = 'header';
        moveIcons.classList = ' icon-set';
    }
});

/*  Search Bar Appear  */
let toggleSearch = false;
let searchToggle = document.querySelector('.search-catalyst');
let searchAppear = document.querySelector('.search-text');
 
let navAppear = () => {
    if (toggleSearch === false) {
        searchAppear.style.display = 'block';
        searchAppear.style.width = '150px';
        toggleSearch = true;
    } else if (toggleSearch === true) {
        searchAppear.style.display = 'none';
        searchAppear.style.width = 0;
        toggleSearch = false;
    }
}



/*  Mobile Side Menu  */

let toggleNavStatus = false;

let toggleNav = function () {
    const mobileDrop = document.querySelector(".mobile-header-drop");
    const menuWrap = document.querySelector(".menu-wrap");
    
//menu extends with button click
    if (toggleNavStatus === false) {
        mobileDrop.style.left = "-38px";
        toggleNavStatus = true;

//menu retracts
    } else if (toggleNavStatus === true) {
        mobileDrop.style.left = "-338px";
        toggleNavStatus = false;
    }
}

/*   Banner Image Change   */
const slides = document.getElementById('banner-slider-container').children;
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
const imageNumberDisp = document.getElementById('banner-image-counter');
let bannerStatus = 0;

const prevImage = () => {
    if (bannerStatus === 0) {
        bannerStatus = slides.length - 1;
    } else {
        bannerStatus--;
    }
    changeImage();
}

const nextImage = () => {
    if (bannerStatus === slides.length - 1) {
        bannerStatus = 0;
    } else {
        bannerStatus++;
    }
    changeImage();
    console.log(bannerStatus);
    console.log(slides);
}

const changeImage = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[bannerStatus].classList.add('active');
}

leftArrow.addEventListener('click', prevImage);
rightArrow.addEventListener('click', nextImage);

/*  Event Listeners  */
searchToggle.addEventListener("click", navAppear);
skiBtn.addEventListener("click", openMenu2);
openButton.addEventListener("click", toggleNav);






// /*   Banner Image Change   */
// const imageZero = document.getElementById('image-0');
// const imageOne = document.getElementById('image-1');
// const imageTwo = document.getElementById('image-2');
// const leftArrow = document.getElementById('arrow-left');
// const rightArrow = document.getElementById('arrow-right');
// const imageNumberDisp = document.getElementById('banner-image-counter');
// let heroCounter = 1;

// window.onload = () => {
//     nextImage();
//     movePicLeft();
// }


// //Change banner image to next one on the LEFT
// const movePicLeft = () => {
//     if(heroCounter === 1) {
//         imageOne.style.opacity = '0';
//         imageZero.style.left = '0px';
//         imageZero.style.zIndex = '1500';
//         imageOne.style.left = '100%';
//         imageOne.style.zIndex = '1000';
//         imageTwo.style.left = '-100%';
//         imageTwo.style.zIndex = '500';
//         imageOne.style.opacity = '1';
//             heroCounter = 3;
//             return;
//     } else if (heroCounter === 3) {
//         imageTwo.style.opacity = '0';
//         imageOne.style.left = '0px';
//         imageOne.style.zIndex = '1500';
//         imageTwo.style.left = '100%';
//         imageTwo.style.zIndex = '1000';
//         imageZero.style.left = '-100%';
//         imageZero.style.zIndex = '500';
//         imageTwo.style.opacity = '1';
//             heroCounter = 2;
//             return;
//     } else if (heroCounter === 2) {
//         imageZero.style.opacity = '0';
//         imageTwo.style.left = '0px';
//         imageTwo.style.zIndex = '1500';
//         imageZero.style.left = '100%';
//         imageZero.style.zIndex = '1000';
//         imageOne.style.left = '-100%';
//         imageOne.style.zIndex = '500';
//         imageZero.style.opacity = '1';
//             heroCounter = 1;
//             return;
//     };
//     imageNumberDisp.innerHTML = `${heroCounter}/3`;
//     return {
//         getHeroCounter: function () {
//             return heroCounter;
//         }
//     }
// }

// //Change banner image to next one on the RIGHT
// const nextImage = () => {
//     if(heroCounter === 1) {
//         imageOne.style.opacity = '0';
//         imageZero.style.right = '0px';
//         imageZero.style.zIndex = '1500';
//         imageOne.style.right = '-100%';
//         imageOne.style.zIndex = '500';
//         imageTwo.style.right = '100%';
//         imageTwo.style.zIndex = '1000';
//         imageOne.style.opacity = '1';
//         heroCounter = 2;
//         imageNumberDisp.innerHTML = `${heroCounter}/3`;
//         return;
//     } else if (heroCounter === 2) {
//         imageTwo.style.opacity = '0';
//         imageOne.style.right = '0px';
//         imageOne.style.zIndex = '1500';
//         imageTwo.style.right = '-100%';
//         imageTwo.style.zIndex = '500';
//         imageZero.style.right = '100%';
//         imageZero.style.zIndex = '1000';
//         imageTwo.style.opacity = '1';
//         heroCounter = 3;
//         imageNumberDisp.innerHTML = `${heroCounter}/3`;
//         return;
//     } else if (heroCounter === 3) {
//         imageZero.style.opacity = '0';
//         imageTwo.style.right = '0px';
//         imageTwo.style.zIndex = '1500';
//         imageZero.style.right = '-100%';
//         imageZero.style.zIndex = '500';
//         imageOne.style.right = '100%';
//         imageOne.style.zIndex = '1000';
//         imageZero.style.opacity = '1';
//         heroCounter = 1;
//         imageNumberDisp.innerHTML = `${heroCounter}/3`;
//         return;
//     };
//     return {
//         getHeroCounter: function () {
//             return heroCounter;
//         }
//     }
// }

// console.log(heroCounter);

// leftArrow.addEventListener('click', movePicLeft);
// rightArrow.addEventListener('click', nextImage);