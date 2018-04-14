const cnv = document.querySelector('.chart__drawing');
const viewPoints = document.querySelector('.points');
const viewPiApprox = document.querySelector('.pi_approx');

let a = cnv.getAttribute('width');
let point_size = 2;
let points_to_generate = 1000000;
let points_generated = 0;
let rand_x = 0,
    rand_y = 0,
    total_in = 0,
    total = 0;

var ctx = cnv.getContext('2d');
ctx.fillStyle = "#f1f1f1";
ctx.fillRect(0, 0, a, a);

ctx.strokeStyle = "#ffeb3b";
ctx.beginPath();
ctx.arc(a/2, a/2, a/2, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();


function graph() {
  
  points_generated++;
  rand_x = Math.floor(Math.random() * a) + 1;
  rand_y = Math.floor(Math.random() * a) + 1;
  
  let distance = Math.sqrt(Math.pow((rand_x - 200), 2) + Math.pow((rand_y - 200), 2))
  if ( distance <= a/2) {
    total_in++;
    ctx.beginPath();
    ctx.fillStyle = "#8bc34a";
    ctx.arc(rand_x - point_size, rand_y - point_size, point_size * 2, 0, 2 * Math.PI, 0);
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.fillStyle = "#f44336";
    ctx.arc(rand_x - point_size, rand_y - point_size, point_size * 2, 0, 2 * Math.PI, 0);
    ctx.fill();
    ctx.closePath();
  }
  
  total++;
  viewPoints.innerHTML = `Wszystkie wygenerowane punkty: ${points_generated}`;
  viewPiApprox.innerHTML = `Przybliżenie pi: ${total_in / (total + 0.0) * 4}`;
  
  if (points_generated <= points_to_generate) {
    window.requestAnimationFrame(graph);
  }
}

window.requestAnimationFrame(graph)