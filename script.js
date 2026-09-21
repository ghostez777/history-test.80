window.onload = () => {
    document.getElementById("loader").style.display = "none";
};

for(let i=0;i<75;i++){

    let particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.animationDuration =
    Math.random()*8 + 5 + "s";

    document.body.appendChild(
        particle
    );
}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener(
"click",
()=>{

    document.body
    .classList.toggle("light");

});
    
const search =
document.getElementById("search");

search.addEventListener(
"keyup",
()=>{

const value =
search.value.toLowerCase();

document
.querySelectorAll(".game-card")
.forEach(card=>{

card.style.display =
card.innerText
.toLowerCase()
.includes(value)

? "block"
: "none";

});

});

function launchGame(){

    document.documentElement
    .requestFullscreen();

    alert(
    "Launching game..."
    );

}

function updateClock(){

    const now =
    new Date();

    document
    .getElementById("clock")
    .textContent =
    now.toLocaleTimeString();

}

setInterval(
updateClock,
1000
);

updateClock();
