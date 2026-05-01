








var popupoverlay = document.getElementById("popupoverlay");
var popup = document.getElementById("popup");
var changelogin = document.getElementById("changelogin")

changelogin.addEventListener("click", function(){
    popupoverlay.style.display = "block";
    popup.style.display = "block";
    console.log(popupoverlay);
console.log(popup);
});




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

    const response = await fetch(
        "http://localhost:3000/signup",
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

    const response = await fetch("http://localhost:3000/login", {

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
