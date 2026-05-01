const form = document.getElementById("signupform");

form.addEventListener("submit", async  (e) => { // e => obj 
    e.preventDefault();// stops refeshing

    //getting values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pword").value;
    const confirmpassword = document.getElementById("pword1").value;

    //password validation
    if(password !== confirmpassword){
        alert("password doesn't match, please check it");
        return;
    }

    //sending the values to the backend
    const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    //success message
    const data = await response.text();
    alert(data);

})