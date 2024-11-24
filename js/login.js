const loginEndpoint = "https://crack-in-backend.azurewebsites.net/login";

document.querySelector('button[type="submit"]').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert("Login successful!");
    } else {
        alert(`Login failed: ${data.message}`);
    }
});
