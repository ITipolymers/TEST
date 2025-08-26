const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});


const registerForm = document.querySelector(".form-box.register form");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const username = registerForm.querySelector("input[placeholder='Username']").value;
    const password = registerForm.querySelector("input[placeholder='Password']").value;

    // Save in localStorage (simulating database)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registered successfully! Now login.");
    container.classList.remove("active"); // switch back to login form
});

// Handle Login Form
const loginForm = document.querySelector(".form-box.login form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = loginForm.querySelector("input[placeholder='Username']").value;
    const password = loginForm.querySelector("input[placeholder='Password']").value;

    // Check with stored data
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        window.location.href = "dashboard.html"; // redirect
    } else {
        alert("Invalid username or password!");
    }
});