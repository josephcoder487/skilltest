var popupoverlay = document.getElementById("popupoverlay");
var popup = document.getElementById("popup");
var changelogin = document.getElementById("changelogin")

changelogin.addEventListener("click", function(){
    popupoverlay.style.display = "block";
    popup.style.display = "block";
    console.log(popupoverlay);
console.log(popup);
});

var submit = document.getElementById("submit");
var loaderbox = document.getElementById("loader-container");
var loadergif = document.getElementById("loader-gif");
var loginn = document.getElementById("loginbtn");
submit.addEventListener("click", function(){
    loaderbox.style.display = "block";
})
loginn.addEventListener("click", function(){
        loaderbox.style.display = "block";
})

function cancel() {
        loaderbox.style.display = "none";
}
function cancell () {
     popupoverlay.style.display = "none";
    popup.style.display = "none";
}




const form = document.getElementById("signupform");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("pword").value;

    const confirmPassword =
        document.getElementById("pword1").value;

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    const response = await fetch("https://skilltest-1.onrender.com/signup",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                email,
                password
            })
        }
    );

    const data = await response.text();

    alert(data);

    if(data === "Signup successful"){
        window.location.href = "firstpage.html";
    }
});

//login>>
const loginbtn = document.getElementById("loginbtn");

loginbtn.addEventListener("click", async () => {

    const username =
        document.querySelector(".username").value;

    const password =
        document.querySelector(".pword").value;

    const response = await fetch("https://skilltest-1.onrender.com/login", {

        method: "POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            username,
            password
        })

    });

    const data = await response.text();

    alert(data);

    if(data === "Login successful"){

        window.location.href = "firstpage.html";

    }

});

