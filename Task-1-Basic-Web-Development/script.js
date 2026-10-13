
"use strict";

// Set the current year in the footer.
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Mobile navigation menu.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the mobile menu after choosing a navigation link.
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// Initial JavaScript alert for the internship requirement.
const startDonation = document.getElementById("startDonation");

if (startDonation) {
    startDonation.addEventListener("click", function () {
        alert(
            "Welcome to FoodLoopAI! Your journey toward reducing food waste starts here."
        );
    });
}
