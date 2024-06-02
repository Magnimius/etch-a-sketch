
const cont = document.getElementById("cont");
function createDivs(numDivs) {

    for (let i = 0; i < numDivs; i++) {
        var panel = document.createElement("div");
        panel.className = "track10";
        panel.id="track10";
        width = 400/Math.sqrt(numDivs);
        flex = 100/Math.sqrt(numDivs);
        flexString = flex.toString();
        widthString = width.toString();
        panel.setAttribute("style","height:"+widthString+"px;width:"+widthString+"px;")
        cont.appendChild(panel);
    }
    var divvy = document.querySelectorAll("div");
    for (const divver of divvy) {
    divver.addEventListener("mouseover",function(e) {
        divver.style.backgroundColor="black";
    })
}
}

function removeAllChildren() {
    while(cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
}

const selector = document.getElementById("selector");
var divNum = selector.value;

selector.addEventListener("change",function(e){
    removeAllChildren();
    divNum = selector.value;
    createDivs(divNum);
})

const reset = document.getElementById("reset");

reset.addEventListener("click",function(e) {
    var divvy = document.querySelectorAll("div");
    for (const divver of divvy) {
        divver.style.backgroundColor="white";
    }
})
