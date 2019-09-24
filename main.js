
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

window.addEventListener('mouseup', function (event) {
    const snowboardAway = document.getElementById("snowboard-drop");
    if (event.target != snowboardAway) {
        snowboardAway.classList = ' snowboard-drop';
    }
});

function openMenu2() {
    document.getElementById("ski-drop").classList.toggle("active");
}

/*  Mobile Drop Down Header  */
let toggleNavStatus = false;

let toggleNav = function (){
    let mobileDrop = document.querySelector(".mobile-header-drop"); 
    let moveBody = document.querySelector("body");
    
  //drop header extends with button click
    if (toggleNavStatus === false) {
        mobileDrop.style.left = "0";
        moveBody.style.position = "fixed";
        moveBody.style.top = "0";
        moveBody.style.left = "300px";
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        mobileDrop.style.left = "-300px";
        moveBody.style.top = "0";
        moveBody.style.left = "0";
        moveBody.style.position = "static";
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

