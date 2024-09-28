// Function to load content based on section route
function loadContent(route) {
    fetch(route)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            // Store the last clicked route in localStorage
            localStorage.setItem('lastClickedRoute', route);
            // Reapply leet effect after content is loaded
            applyLeetEffect();
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('main-content').innerHTML = '<p>Content could not be loaded.</p>';
        });
}

// Function to apply leet hover effect
function applyLeetEffect() {
    const leetMap = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5',
        't': '7'
    };

    const spans = document.querySelectorAll('h1 span[data-l33t]');

    spans.forEach(span => {
        const originalText = span.textContent.trim();
        const leetChar = leetMap[originalText.toLowerCase()] || '';

        if (leetChar) {
            span.setAttribute('data-l33t', leetChar);
            span.addEventListener('mouseenter', function() {
                this.textContent = this.getAttribute('data-l33t');
            });
            span.addEventListener('mouseleave', function() {
                this.textContent = originalText;
            });
        }
    });
}

// Apply leet hover effect immediately
applyLeetEffect();

// Function to load home.html initially on page load
window.onload = function() {
    fetch(`/content/home`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            // Store the last clicked route in localStorage
            localStorage.setItem('lastClickedRoute', '/home'); // Assuming '/home' is the correct route
            // Reapply leet effect after content is loaded
            applyLeetEffect();
        })
        .catch(error => {
            console.error('Error loading home content:', error);
            document.getElementById('main-content').innerHTML = '<p>Home content could not be loaded.</p>';
        });
};

// Check localStorage for last clicked route and load content on page load
const lastClickedRoute = localStorage.getItem('lastClickedRoute');
if (lastClickedRoute) {
    loadContent(lastClickedRoute);
}

// Function to reset main content to home.html
function resetMainContent() {
    fetch("/content/home") // Assuming '/content/home' is the correct Flask route for home.html
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            // Store the last clicked route in localStorage
            localStorage.setItem('lastClickedRoute', '/home'); // Update the route if necessary
            // Reapply leet effect after content is loaded
            applyLeetEffect();
        })
        .catch(error => {
            console.error('Error resetting main content:', error);
            document.getElementById('main-content').innerHTML = '<p>Home content could not be loaded.</p>';
        });
}
