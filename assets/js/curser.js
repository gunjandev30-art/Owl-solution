
var canvas = document.createElement('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');
ctx.globalAlpha = 0.65;

var mousePos = { x: canvas.width / 2, y: canvas.height / 2 };
window.onmousemove = function(e) {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
};

function Particle() {
  this.x = mousePos.x;
  this.y = mousePos.y;
  this.size = 14 + (Math.random() * 11);
  this.speed = 0.045 + (Math.random() / 22) * 2;
  this.entropy = (Math.random() / 2) - 0.5;
};
Particle.prototype.update = function() {
  var theta = -1 * Math.atan2(this.x - mousePos.x, this.y - mousePos.y) - Math.PI / 2;
  var distance = Math.sqrt(Math.pow(this.x - mousePos.x, 2) + Math.pow(this.y - mousePos.y, 2));
  
  this.x += Math.cos(theta + this.entropy) * distance * this.speed;
  this.y += Math.sin(theta + this.entropy) * distance * this.speed;
};
Particle.prototype.render = function() {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = '#00000';
  ctx.strokeStyle = '#00000';
  ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

var particles = [];
for(var i = 0; i < 1; i++) {
  particles.push(new Particle());
}

function demo () {
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  particles.forEach(function(particle) {
    particle.update();
    particle.render();
  })
  requestAnimationFrame(demo);
};

requestAnimationFrame(demo);


