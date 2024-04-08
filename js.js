const button = document.getElementById("full");
const table = document.getElementById("results__table");
let flag = false;
button.addEventListener("click", () => {
  if (!flag) {
    table.style.height = "1200px";
    flag = true;
  } else {
    table.style.height = "";
    flag = false;
  }
});

const slide_1 = document.getElementById("slide_1");
const prev_slide = document.getElementById("prev-slide");
const next_slide = document.getElementById("next-slide");
let number = 0;
let margin = 38;
document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 39:
      if (number < 2) {
        slide_1.style.marginLeft = `${margin -= 38}%`;
        number++
      }
      break;
    case 37:
        if (number > 0) {
            slide_1.style.marginLeft = `${margin += 38}%`;
            number--
          }
          break;
  }
});
let num = 0;
let mar = 38;
const slide = document.getElementById("slide_1")
function right(){
  if(num<2){
    slide_1.style.marginLeft = `${mar -= 38}%`
    num++
  }
}

function left(){
  if (num > 0){
    slide_1.style.marginLeft = `${mar += 38}%`
    num--
  }
}