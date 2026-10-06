// ==============================
// LUMÉ — WEBSITE JAVASCRIPT
// ==============================


// ==============================
// WHATSAPP ORDER SYSTEM
// ==============================

const whatsappNumber = "923001234567";

const orderButtons = document.querySelectorAll(".order-button");


orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector("p").textContent;


        const message =
            `Hello LUMÉ! 👋%0A%0A` +
            `I would like to order:%0A` +
            `Product: ${productName}%0A` +
            `Price: ${productPrice}%0A%0A` +
            `Please let me know about availability.`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${message}`;


        window.open(whatsappURL, "_blank");

    });

});



// ==============================
// MOBILE MENU
// ==============================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// ==============================
// CLOSE MOBILE MENU
// WHEN A LINK IS CLICKED
// ==============================

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});