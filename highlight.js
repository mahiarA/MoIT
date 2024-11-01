// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to add the hover effect
function addHoverEffect(event) {
    event.target.style.transform = 'scale(1.1)'; // Slight zoom
    event.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)'; // Add shadow
    event.target.style.paddingLeft = '5px'; // Move the text slightly to the right
    event.target.style.paddingTop = '3px'; // Move the text slightly down
}

// Function to remove the hover effect
function removeHoverEffect(event) {
    event.target.style.transform = 'scale(1)'; // Reset zoom
    event.target.style.boxShadow = 'none'; // Remove shadow
    event.target.style.paddingLeft = '0'; // Reset text position
    event.target.style.paddingTop = '0'; // Reset text position
}

// Add event listeners to each link for hover in and out
navLinks.forEach(link => {
    link.addEventListener('mouseover', addHoverEffect);
    link.addEventListener('mouseout', removeHoverEffect);
});
