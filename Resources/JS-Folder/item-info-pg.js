const dot = document.getElementById("header-cart-dot");
const dotButton = document.getElementById("cart-button");
//<button onclick="myFunction()">Click me</button>

function dotAppear() {
    dot.style.display = "block";
}

dotButton.addEventListener("click", dotAppear);
