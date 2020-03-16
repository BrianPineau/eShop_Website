
const headerCollapse = document.querySelector('header');
const moveIcons = document.querySelector('.icon-set');
const openButton = document.querySelector(".toggler");

/*  Header Scroll Pop Out  */
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 40) {
        headerCollapse.classList.add('pop-out');
        moveIcons.classList.add('icon-move');
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
const captions = document.getElementById('banner-title-container').children;
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
const imageNumberDisp = document.getElementById('banner-image-counter');
let bannerStatus = 0;


window.onload = () => {
    changeImage();
}

//Switch to next banner image
const prevImage = () => {
    if (bannerStatus === 0) {
        bannerStatus = slides.length - 1;
    } else {
        bannerStatus--;
    }
    changeImage();
}

//Switch to previous banner image
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
        captions[i].classList.remove('visable');
    }
    slides[bannerStatus].classList.add('active');
    captions[bannerStatus].classList.add('visable');
}

leftArrow.addEventListener('click', prevImage);
rightArrow.addEventListener('click', nextImage);

/*  Event Listeners  */
searchToggle.addEventListener("click", navAppear);
skiBtn.addEventListener("click", openMenu2);
openButton.addEventListener("click", toggleNav);


