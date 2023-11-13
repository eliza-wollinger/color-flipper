const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

window.addEventListener("load", () => {
  btn.addEventListener("click", handleColorChange);
  window.addEventListener("keydown", e=>{
    if(e.key==="Enter"||e.key===" ") handleColorChange()
  })
} )

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function handleColorChange() {
  let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    // console.log(hexColor);
  
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}