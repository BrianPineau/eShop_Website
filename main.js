
const headerCollapse = document.querySelector('header');
const moveIcons = document.querySelector('.icon-set');
const snowboardBtn = document.getElementById("header-snowboard-button");
const skiBtn = document.getElementById("header-ski-button")

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
        dropMenu.style.display = "block";
        toggleMenu = true;
    
    //Menu disappears on button click or click outside
    } else if (toggleMenu === true) {
        dropMenu.style.display = "none";
        toggleMenu = false;
  }

}


/*  Search Bar Appear  */
function searchAppear() {
    document.querySelector("search-text").classList.toggle("search-text-appear");
}


/*  Mobile Side Menu  */

let toggleNavStatus = false;

let toggleNav = function (){
    let mobileDrop = document.querySelector(".mobile-header-drop");
    
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
const addCart = document.getElementById('button-1');
const cartUpdate = document.querySelector('.header-cart-item');

/*
function updateCheckout () {
    cartUpdate.classList.add("full");
}
*/
addCart.addEventListener("click", function () {
    cartUpdate.classList.add("full");
});
/*  Event Listeners  */
snowboardBtn.addEventListener("click", openMenu);
skiBtn.addEventListener("click", openMenu2);
//addCart.addEventListener('click', updateCheckout);

