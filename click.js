const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[randomcolor()];
        console.log(hexcolor);
        
    }
    color.textContent=hexcolor;
    btn.style.backgroundColor=hexcolor;
    document.body.style.backgroundColor = hexcolor;
})
function randomcolor() {
    return Math.floor(Math.random() * hex.length);
}