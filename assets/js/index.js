const submit = document.getElementById("button");
submit.addEventListener("click", function () {
    const user = document.getElementById("user");
    const password = document.getElementById("passw");
    if (user.value === "" || password.value === "") {
        alert("Please fill in both fields");
    } else {
        if (user.value === "admin" && password.value === "pass") {
            window.location.href = "exterior.html";
        }
        else {
            alert("Login Failed");
            user.value = "";
            password.value = "";
        }
    }
});