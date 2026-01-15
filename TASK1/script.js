document.getElementById("getStartedBtn").addEventListener("click", function () {
    alert("Welcome to WebCraft 🚀 Let’s build something great!");
});

function subscribe() {
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email address");
        return;
    }

    alert("Thank you for contacting WebCraft!");
    document.getElementById("email").value = "";
}
