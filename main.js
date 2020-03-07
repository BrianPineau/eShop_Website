
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
const imageZero = document.getElementById('image-0');
const imageOne = document.getElementById('image-1');
const imageTwo = document.getElementById('image-2');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
let heroCounter = 0;




const movePicLeft = () => {

    // if(heroCounter === 0) {
    //     imageZero.classList.remove('right-image');
    //     imageZero.classList.add('left-image');
    //     imageOne.classList.remove('left-image');
    //     imageOne.classList.add('active-image');
    //     imageTwo.classList.remove('active-image');
    //     imageTwo.classList.add('right-image');
    //     heroCounter = 2;
    // } else if (heroCounter === 2) {
    //     imageTwo.classList.remove('right-image');
    //     imageTwo.classList.add('left-image');
    //     imageZero.classList.remove('left-image');
    //     imageZero.classList.add('active-image');
    //     imageOne.classList.remove('active-image');
    //     imageOne.classList.add('right-image');
    //     heroCounter--;
    // } else if (heroCounter === 1) {
    //     imageOne.classList.remove('right-image');
    //     imageOne.classList.add('left-image');
    //     imageTwo.classList.remove('left-image');
    //     imageTwo.classList.add('active-image');
    //     imageZero.classList.remove('active-image');
    //     imageZero.classList.add('right-image');
    //     heroCounter--;
    // }
}

const nextHeroLoop = () => {
    if(heroCounter === 0) {
        imageTwo.style.opacity = '0';
        
        imageZero.style.right = '0px';
        imageZero.style.zIndex = '1000';
        imageOne.style.right = '-100%';
        imageOne.style.zIndex = '1500';
        imageTwo.style.right = '100%';
        imageTwo.style.zIndex = '500';
        imageTwo.style.opacity = '1';
        heroCounter = 1;
    } else if (heroCounter === 1) {
        imageZero.style.opacity = '0';

        imageOne.style.right = '0px';
        imageOne.style.zIndex = '1000';
        imageTwo.style.right = '-100%';
        imageTwo.style.zIndex = '1500';
        imageZero.style.right = '100%';
        imageZero.style.zIndex = '500';
        imageZero.style.opacity = '1';
        heroCounter = 2;
    } else if (heroCounter === 2) {
        imageOne.style.opacity = '0';

        imageTwo.style.right = '0px';
        imageTwo.style.zIndex = '1000';
        imageZero.style.right = '-100%';
        imageZero.style.zIndex = '1500';
        imageOne.style.right = '100%';
        imageOne.style.zIndex = '500';
        imageOne.style.opacity = '1';
        heroCounter = 0;
    }


}

leftArrow.addEventListener('click', movePicLeft);
rightArrow.addEventListener('click', nextHeroLoop);



/*  Event Listeners  */
searchToggle.addEventListener("click", navAppear);
skiBtn.addEventListener("click", openMenu2);
openButton.addEventListener("click", toggleNav);
