const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');
const background = document.getElementById('background');
const nameColor = document.getElementById('name');

btn.addEventListener("click", () =>{
    let aux = getHexColor();
    if(aux == "#000000"){
        nameColor.style.backgroundColor = "#ffffff";
        nameColor.style.color = "#000000";
    }
    color.textContent = aux;
    color.style.color = aux;
    background.style.backgroundColor = aux;
});


function getHexColor(){
    let hexColor = "#";
    for(let i = 0 ; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}