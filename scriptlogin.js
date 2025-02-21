const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

registerButton.addEventListener('click', () => {
    container.classList.add('active');
});

loginButton.addEventListener('click', () => {
    container.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Perform login validation here (e.g., check credentials)
    // Redirect to the home page after successful login
    window.location.href = 'index.html'; // Replace 'home.html' with your home page URL
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Perform signup validation here (e.g., check if the user already exists)
    // Redirect to the home page after successful signup
    window.location.href = 'index.html'; // Replace 'home.html' with your home page URL
});