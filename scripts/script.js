/*
    Students: Bee Campbell, Diego Mondéjar, Efe Kaya
    File Name: script.js
*/

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var icon = document.querySelector(".menu-icon div");
    var button = document.querySelector(".menu-icon");

    if (!menu) {
        return;
    }

    menu.classList.toggle("show");

    if (icon) {
        icon.textContent = menu.classList.contains("show") ? "X" : "\u2630";
    }

    if (button) {
        button.setAttribute("aria-expanded", menu.classList.contains("show"));
    }
}

// Hide/show function for FAQ answers
function toggleAnswer(question) {
    var answer = question.nextElementSibling;

    if (answer) {
        answer.classList.toggle("is-hidden");
    }
}

function setupHamburger() {
    var button = document.querySelector(".menu-icon");

    if (!button) {
        return;
    }

    button.setAttribute("role", "button");
    button.setAttribute("aria-label", "Open navigation menu");
    button.setAttribute("aria-expanded", "false");

    button.onclick = function(event) {
        event.preventDefault();
        hamburger();
    };
}

function setupFaq() {
    var questions = document.querySelectorAll("#questions dt");

    for (var i = 0; i < questions.length; i++) {
        questions[i].classList.add("toggle-question");
        questions[i].setAttribute("tabindex", "0");

        if (questions[i].nextElementSibling) {
            questions[i].nextElementSibling.classList.add("is-hidden");
        }

        questions[i].onclick = function() {
            toggleAnswer(this);
        };

        questions[i].onkeydown = function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleAnswer(this);
            }
        };
    }
}

function promoCode() {
    var discount = document.getElementById("discount");
    var message = document.getElementById("promo-message");

    if (!discount) {
        return;
    }

    if (!message) {
        message = document.createElement("p");
        message.id = "promo-message";
        message.textContent = "Please contact office@youthlinc.org to verify your application code.";
        discount.appendChild(message);
    }
    else {
        message.classList.toggle("is-hidden");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setupHamburger();
    setupFaq();
});
