let box = document.getElementById("box");

let width = window.innerWidth;
let height = window.innerHeight;

window.addEventListener("resize", (e) => {
  width = window.innerWidth;
  height = window.innerHeight;
});

box.addEventListener("mouseenter", catchMe);

function catchMe() {
  let currCorrdinate = box.getBoundingClientRect();
  let x = Math.floor(Math.random() * width + 1 - currCorrdinate.width);
  let y = Math.floor(Math.random() * height + 1 - currCorrdinate.height);
  if (x < 0) {
    x = 0;
  }
  if (y < 0) {
    y = 0;
  }
  box.style.left = x + "px";
  box.style.top = y + "px";

  console.log(x, y);
}
