//juego adivina el num de la primer entrega

// //inicio programa
// const min = 1;
// const max = 10;

// //array con las variables posibles
// const numeros = [];
// for (let i = min; i <= max; i++) {
//     numeros.push(i);
// }

// //eleccion de num aleatorio del array
// const randomIndex = Math.floor(Math.random() * numeros.length);
// const numeroRandom = numeros[randomIndex];

// //pido al usuario que eliga el num
// let userGuess = parseInt(prompt(`Adivina el número entre ${min} y ${max}:`));

// //vemos si el num ingresado es correcto
// if (userGuess === numeroRandom) {
//     alert('¡Felicidades! Adivinaste el número.');
// } else {
//     alert(`Lo siento, el número correcto era ${numeroRandom}.`);
// }

// //preguntamos si quiere jugar de nuevo
// const jugarOtravez = confirm('¿Quieres jugar de nuevo?');

// if (jugarOtravez) {
//     //si quiere jugar denuevo refrescamos la pagina
//     location.reload();
// } else {
//     //sino quiere jugar de nuevo lo despedimos
//     alert('Gracias por jugar. ¡Hasta luego!');
// }


let cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const checkoutButton = document.getElementById("checkout");
const totalElement = document.getElementById("total");
const purchaseModal = document.getElementById("purchase-modal");
const closePurchase = document.getElementById("close-purchase");

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const productCard = button.closest(".card-product");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = parseFloat(productCard.querySelector(".price").textContent.replace("$", ""));
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCartCount();
        saveCart();
        updateTotal();
    });
});

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById("cart-icon").addEventListener("click", function () {
    cartModal.style.display = "flex";
    displayCart();
    updateTotal();
});

closeCart.addEventListener("click", function () {
    cartModal.style.display = "none";
});

checkoutButton.addEventListener("click", function () {
    purchaseModal.style.display = "flex";
    cart = [];
    updateCartCount();
    saveCart();
    updateTotal();
    cartModal.style.display = "none";
});

closePurchase.addEventListener("click", function () {
    purchaseModal.style.display = "none";
});

function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        updateTotal();
    }
}

loadCart();