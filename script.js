// Handle login functionality (Automatically redirect after login)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Directly redirect to the home page without checking credentials
    window.location.href = 'home.html';  // Redirect to the home page
});

// Handle registration functionality (Automatically redirect after registration)
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Directly redirect to the login page after registration
    window.location.href = 'index.html';  // Redirect to login page
});