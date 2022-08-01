const img = document.getElementById('img');
const title = document.getElementById('name');
var time = 3000;

const data = [
    {
        src: "../imgs/flipper-color.jpg",
        title: "Color Flipper"
    },
    {
        src: "../imgs/menu-food.jpg",
        title: "Menu"
    },
    {
        src: "../imgs/tabs.jpg",
        title: "Tabs"
    }
]

let aux = 0;

function changeImg(){
    if(aux == 3) aux = 0;
    img.setAttribute("src", data[aux].src);
    aux++;
    setTimeout("changeImg()", time);
}

window.onload = changeImg;


/*

    Miguel Angel Apolo Cabrera
    
*/