
const headerCollapse = document.querySelector('header');
const moveIcons = document.querySelector('.icon-set');
const snowboardBtn = document.getElementById("header-snowboard-button");
const skiBtn = document.getElementById("header-ski-button")
const addCart = document.querySelector('.button-1');
const cartUpdate = document.querySelector('.header-cart-item');

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
function openMenu() {
    document.getElementById("snowboard-drop").classList.toggle("active");
}
//Click outside of drop menu to close menu
window.addEventListener('mouseup', function (event) {
    const snowboardAway = document.getElementById("snowboard-drop");
    if (event.target != snowboardAway) {
        snowboardAway.classList = ' snowboard-drop';
    }
});

function openMenu2() {
    document.getElementById("ski-drop").classList.toggle("active");
}

/*  Search Bar Appear  */
function searchAppear() {
    document.querySelector("search-text img").classList.toggle("search-text-appear");
}


/*  Mobile Side Menu  */
let toggleNavStatus = false;

let toggleNav = function (event){
    let mobileDrop = document.querySelector(".mobile-header-drop"); 
    let mobileDropOffset = headerCollapse.offsetHeight;
    let moveBody = document.querySelector("body");

//Set height of side menu
    mobileDrop.style.top = mobileDropOffset + 'px';
    
//menu extends with button click
    if (toggleNavStatus === false) {
        mobileDrop.style.left = "0";
        toggleNavStatus = true;

//menu retracts
    } else if (toggleNavStatus === true) {
        mobileDrop.style.left = "-300px";
        toggleNavStatus = false;
    }

}

/*  Cart Full Indicator  */
function updateCheckout () {
    cartUpdate.classList.add("full");
}

/*  Event Listeners  */
snowboardBtn.addEventListener("click", openMenu);
skiBtn.addEventListener("click", openMenu2);
addCart.addEventListener('click', updateCheckout);

