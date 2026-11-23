
let form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "" ||
        password === "" || confirmPassword === "") {

        message.style.color = "red";
        message.innerHTML = "Please fill all fields!";
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        message.style.color = "red";
        message.innerHTML = "Please enter a valid email!";

    }

    else if (!/^\d{10,15}$/.test(phone)) {

        message.style.color = "red";
        message.innerHTML = "Enter a valid phone number!";

    }

    else if (password.length < 8) {

        message.style.color = "red";
        message.innerHTML = "Password must be at least 8 characters!";

    }

    else if (password !== confirmPassword) {

        message.style.color = "red";
        message.innerHTML = "Passwords do not match!";

    }

    else {

        message.style.color = "green";
        message.innerHTML = "Signup Successful!";

        form.reset();

    }

});