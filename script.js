document.addEventListener("DOMContentLoaded", () => {
    // Select common menu elements (e.g., nav links, menu items)
    const menuItems = document.querySelectorAll("nav a, .menu-item, ul li a, .tab, header nav a");

    // Apply scaling effect with proper styles
    menuItems.forEach(item => {
        item.style.transition = "transform 0.3s ease, color 0.3s ease"; // Add smooth scaling and color transition
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.2)"; // Magnify the element
            item.style.color = "#007BFF"; // Optional: change color on hover
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)"; // Reset the scale
            item.style.color = ""; // Reset color to original
        });
    });

    // Toggle Hamburger Menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Add or remove 'active' class for nav-menu
        });
    }
});
