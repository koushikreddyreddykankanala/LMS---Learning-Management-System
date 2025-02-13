document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Hardcoded credentials
    {correctUsername = "123456";
    correctPassword = "Abcdef";}

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "teacher_dashboard.html"; // Redirect to dashboard
    } else {
        errorMsg.textContent = "Invalid credentials. Please try again.";
    }
});
