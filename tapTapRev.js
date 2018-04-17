const canvas = document.getElementById("ttrCanvas");
const ctx = canvas.getContext("2d");

let staticLeftArrow = 1.5*(canvas.width/8);
let staticDownArrow = 2.75*(canvas.width/8);
let staticUpArrow = 4.0*(canvas.width/8);
let staticRightArrow = 5.25*(canvas.width/8);
let y = 10;

window.onload = function() {
  let left = document.getElementById("left arrow");
  ctx.drawImage(left, staticLeftArrow, y, 75, 75);
  let down = document.getElementById("down arrow");
  ctx.drawImage(down, staticDownArrow, y, 75, 75);
  let up = document.getElementById("up arrow");
  ctx.drawImage(up, staticUpArrow, y, 75, 75);
  let right = document.getElementById("right arrow");
  ctx.drawImage(right, staticRightArrow, y, 75, 75);
};
