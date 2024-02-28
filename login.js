var storedUserData = JSON.parse(localStorage.getItem("userData"));
function login() {
    var enteredEmail = document.getElementById("email").value;
    var enteredPassword = document.getElementById("password").value;


    if (enteredEmail === storedUserData.mailphone && enteredPassword == storedUserData.password) {
        window.location.href = "dashboard.html"
    } else {
        alert("No user data found. Please register or try again.");
    }
}
