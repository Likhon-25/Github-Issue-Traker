const loginbtn = document.getElementById("loginBtn");

loginbtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "./home.html"
    }
    else {
        alert("Invlain Username || Password")
    }
});