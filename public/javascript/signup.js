function insertData() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    return fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            email,
            password 
        })
    });
}