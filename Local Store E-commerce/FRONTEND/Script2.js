document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login Successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid Credentials!");
        }
    })
    .catch(error => console.error("Login Error:", error));
});

document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "User registered successfully!") {
            alert("Signup Successful! Please login.");
            window.location.href = "login.html";
        } else {
            alert("Signup Failed!");
        }
    })
    .catch(error => console.error("Signup Error:", error));
});
