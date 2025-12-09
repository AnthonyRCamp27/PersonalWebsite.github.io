// Smooth Scrolling for Navigation Links

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default jump action
        e.preventDefault();

        // Get the target section ID (e.g., '#about')
        const targetId = this.getAttribute('href');
        
        // Find the target element
        const targetElement = document.querySelector(targetId);

        // Scroll to the element smoothly, accounting for the fixed header
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});