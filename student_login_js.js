document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Hardcoded credentials
    {correctUsername = "12417204";
    correctPassword = "Sathvik@2008";}

    {correctUsername = "12408196";
    correctPassword = "Shivasai12@";}

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "student_dashboard.html"; // Redirect to dashboard
    } else {
        errorMsg.textContent = "Invalid credentials. Please try again.";
    }
});
