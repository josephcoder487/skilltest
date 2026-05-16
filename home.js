const test1 = document.getElementById("test1");
const firstpage = document.querySelector(".firstpage");
const fullstack = document.querySelector(".fullstack");
const back1 = document.querySelector(".back1");
test1.addEventListener("click", () => {
    firstpage.style.display = "none";
    fullstack.style.display = "block";
})
back1.addEventListener("click", () => {
    firstpage.style.display = "block";
    fullstack.style.display = "none";
})

// timer ======= ithu apram ahh pathukalam
const timer = document.getElementById("timer");

// let timeLeft = 60; // 60 seconds
// const countdown = setInterval(() => {
//     if (timeLeft <= 0) {
//         clearInterval(countdown);
//         timer.textContent = "Time's up!";
//     } else {
//         timeLeft--;
//         timer.textContent = `Time left: ${timeLeft} seconds`;
//     }
// }, 1000);


// tabs
const  csBtn = document.getElementById("cs-btn");
const comBtn = document.getElementById("com-btn");
const otherBtn = document.getElementById("other-btn");
const csSection = document.getElementById("computerscience");
const comSection = document.getElementById("commerce");
const otherSection = document.getElementById("others");
const course = document.querySelector(".course-container");

csBtn.addEventListener("click", () => {
    csSection.style.display = "flex";
    comSection.style.display = "none";
    otherSection.style.display = "none";    
});
comBtn.addEventListener("click", () => {
    csSection.style.display = "none";
    comSection.style.display = "flex";

    otherSection.style.display = "none";
});
otherBtn.addEventListener("click", () => {
    csSection.style.display = "none";
    comSection.style.display = "none";
    otherSection.style.display = "block";
});