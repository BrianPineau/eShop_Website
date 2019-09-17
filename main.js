
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

function openMenu2() {
    document.getElementById("ski-drop").classList.toggle("active");
}

/*  Cart Full Indicator  */
function updateCheckout () {
    cartUpdate.classList.add("full");
}

/*  Event Listeners  */
snowboardBtn.addEventListener("click", openMenu);
skiBtn.addEventListener("click", openMenu2);
addCart.addEventListener('click', updateCheckout);

