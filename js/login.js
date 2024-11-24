const login = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://crack-in-backend.azurewebsites.net/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.status === 200) {
            alert(data.message); // Login successful
        } else {
            alert(data.message); // Invalid credentials
        }
    } catch (error) {
        console.error("Error connecting to backend:", error);
        alert("Unable to connect to the server. Please try again later.");
    }
};

document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    login();
});
