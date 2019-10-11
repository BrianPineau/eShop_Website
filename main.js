
const headerCollapse = document.querySelector('header');
const moveIcons = document.querySelector('.icon-set');
const snowboardBtn = document.getElementById("header-snowboard-button");
const skiBtn = document.getElementById("header-ski-button");
const addCart = document.getElementById('button-1');
const cartUpdate = document.querySelector('.header-cart-item');
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




/*  Header Drop Menus  */
/*
function openMenu() {
    document.getElementById("snowboard-drop").classList.toggle("active");
}

//Click outside of drop menu to close menu
window.addEventListener('mouseup', function (e) {
    const snowboardAway = document.getElementById("snowboard-drop");
    if (e.target != snowboardAway) {
        snowboardAway.classList = ' snowboard-drop';
    }
});

function openMenu2() {
    document.getElementById("ski-drop").classList.toggle("active");
}
*/


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
/*
function searchAppear() {
    document.querySelector(".search-text").classList.toggle(".search-text-appear");
}
*/


/*  Search Bar Appear  */
let toggleSearch = false;
let searchToggle = document.querySelector('.search-bar');
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


/*
let mobileDrop = document.querySelector(".mobile-header-drop");
let OPEN_CLASS = '.mobile-header-drop.mobile-drop-extend'
let menuBtn = document.querySelector('toggler');

const addOffClick = (e, cb) => {
    const offClick = (evt) => {
      if (e !== evt) {
        cb()
        document.removeEventListener('click', offClick)
      }
    }
    document.addEventListener('click', offClick)
  }
  
  const handleClick = (e) => {
    const toggleMenu = () => mobileDrop.classList.toggle(OPEN_CLASS)
    if (propCheck.checked) e.stopPropagation()
    if (!menu.classList.contains(OPEN_CLASS)) {
      toggleMenu()
      addOffClick(e, toggleMenu)
    }
  }
  
  menuBtn.addEventListener('click', handleClick)
*/


/*  Cart Full Indicator  */
const checkoutIndic = function () {
    cartUpdate.classList.add("full");
};


/*  Event Listeners  */
searchToggle.addEventListener("click", navAppear)
addCart.addEventListener("click", checkoutIndic);
snowboardBtn.addEventListener("click", openMenu);
skiBtn.addEventListener("click", openMenu2);
openButton.addEventListener("click", toggleNav);
//addCart.addEventListener('click', updateCheckout);

