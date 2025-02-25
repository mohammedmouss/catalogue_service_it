"use strict";

function scrollToSection() {
    const target = document.querySelector(window.location.hash);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

// Exécuter au chargement de la page
window.onload = scrollToSection;

// Écouter les clics sur les liens internes
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const targetID = this.getAttribute("href");
        
        // Change manuellement le hash pour forcer un rafraîchissement
        window.location.hash = targetID;

        // Appelle la fonction pour défiler vers la section
        scrollToSection();
    });
});
