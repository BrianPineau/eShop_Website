
const headerCollapse = document.querySelector('header');
const moveIcons = document.querySelector('.icon-set');
const snowboardBtn = document.getElementById("header-snowboard-button");
const skiBtn = document.getElementById("header-ski-button");
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


/* Header Drop Menus */
let toggleMenu = false;

let openMenu = function () {
let dropMenu = document.getElementById("snowboard-drop");
    //Menu appears
    if (toggleMenu === false) {
        dropMenu.classList = "block";
        toggleMenu = true;
    
    //Menu disappears on button click or click outside
    } else if (toggleMenu === true) {
        dropMenu.style.display = "none";
        toggleMenu = false;
  }

}

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


/*  Cart Full Indicator  */
document.querySelector("header-cart-dot").style.border = "block";
document.querySelector("header").style.backgroundColor = "green";

document.queryselector("header-cart-dot").style.display = "block";

/*  Event Listeners  */
searchToggle.addEventListener("click", navAppear);
snowboardBtn.addEventListener("click", openMenu);
skiBtn.addEventListener("click", openMenu2);
openButton.addEventListener("click", toggleNav);
dotButton.addEventListener("click", cartFull);
