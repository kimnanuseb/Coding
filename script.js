// Smooth Scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Toggle Details
function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// Contact Form Placeholder
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you! Your message has been submitted.');
});
