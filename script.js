document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les liens internes
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Empêcher le comportement par défaut du lien
            event.preventDefault();

            // Récupérer l'ID de l'ancre cible
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Faire défiler la page vers l'élément cible
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Mettre à jour l'URL avec le hash (optionnel)
                window.history.pushState(null, null, '#' + targetId);
            }
        });
    });
});