async function login(){

    const user = document.getElementById("username").value;

    const pass = document.getElementById("password").value;

    const response = await fetch(
        "http://restaurant-backend.onrender.com/admin/login",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: user,
                password: pass
            })
        }
    );

    const data = await response.json();

    if(data.success){

        localStorage.setItem("isAdmin", true);

        window.location.href = "admin.html";

    } else {

        alert("Invalid Credentials");
    }
}