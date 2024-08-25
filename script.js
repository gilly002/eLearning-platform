// Scroll to courses section
function enroll(courseName) {
    alert("You have enrolled in " + courseName + "!");
}

// Form submission handling (example, not functional without a backend)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});

// Sample credentials for demonstration
const validUsername = "user";
const validPassword = "password123";

// Handling form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple client-side validation
    if (username === validUsername && password === validPassword) {
        wronginput.style.color = "green";
        wronginput.textContent = "Login successful! Redirecting...";
        // Redirect or load the next page after successful login
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Replace with your actual dashboard page
        }, 1500);
    } else {
        wronginput.style.color = "red";
        wronginput.textContent = "Invalid username or password!";
    }
});

// Log out functionality
document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevents default anchor behavior

    // Clear session or local storage (depending on your implementation)
    sessionStorage.clear(); // Use this if you stored the user's session in sessionStorage
    localStorage.clear();   // Use this if you stored the user's data in localStorage

    // Redirect to the login page
    window.location.href = "login.html";  // Replace with your actual login page
});
