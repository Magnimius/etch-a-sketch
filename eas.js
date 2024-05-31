
const cont = document.getElementById("cont");

function createDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        var panel = document.createElement("div");
        panel.className = "track10";
        panel.id="track10";
        panel.classList.add("style.css");
        cont.appendChild(panel);
    }
}

createDivs(16);

var divvy = document.querySelectorAll("div");
for (const divver of divvy) {
    divver.addEventListener("mouseover",function(e) {
        divver.style.backgroundColor="black";
    })
}

const reset = document.getElementById("reset");

reset.addEventListener("click",function(e) {
    for (const divver of divvy) {
        divver.style.backgroundColor="white";
    }
})
