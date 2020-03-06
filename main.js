
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
let picCounter = 0;


const movePicLeft = () => {
    console.log('it works fool!');
}

const movePicRight = () => {
    document.getElementById('image-' + picCounter).classList.add('active-image');
    picCounter++;
    if(picCounter > 2) {
        picCounter = 0;
    }

    console.log(picCounter);
}

leftArrow.addEventListener('click', movePicLeft);
rightArrow.addEventListener('click', movePicRight);



/*  Event Listeners  */
searchToggle.addEventListener("click", navAppear);
skiBtn.addEventListener("click", openMenu2);
openButton.addEventListener("click", toggleNav);
