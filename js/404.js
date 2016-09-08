var stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);

var particles = [],
  play = 0,
  img = new Image(),
  index = 0,
  numPart = 1800,
  travel = true,
  follow = false,
  avoid = false,
  back = false,
  paused,
  once,
  drawing = true,
  gaf = true,
  count = 0;

img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/542910/bg.jpg';

function randomBetween(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function midMouse(){
  if(drawing){
    if (Lines[0].n === Lines[0].d) {
      count++;
      if(gaf){
        ctx.globalAlpha = 0.1;
        ctx.fillRect(w/4,h/4,w/2,h/2);
        ctx.globalAlpha = 1;
      }
      if(count > 9 && count < 15){
          gaf = false;
        } else {
          gaf = true;
        }
    } else {
      count = 0;
      return false;
    }
  }
}

var options = {
  Travel: function() {
    travel = true;
    follow = false;
    avoid = false;
    back = false
    numPart = 1800;
  },
  Follow: function() {
    travel = false;
    follow = true;
    avoid = false;
    back = false
    numPart = 2100;
  },
  Avoid: function() {
    travel = false;
    follow = false;
    avoid = true;
    back = false
    numPart = 2100;
  },
  Backwards: function() {
    travel = false;
    follow = false;
    avoid = false;
    back = true;
    numPart = 1800;
  },
  Music: false,
  Text: true,
};

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  if (drawing) {
      Lines = [];
      new Line(w / 4, (h / 4) - 5, w / 4, h / 2, '#ffffff');
      new Line(w / 4, (3 * (h / 4)) + 5, w / 4, h / 2, '#ffffff');
      new Line((w / 4) - 5, h / 4, w / 2, h / 4, '#ffffff');
      new Line((3 * (w / 4)) + 5, h / 4, w / 2, h / 4, '#ffffff');
      new Line(3 * (w / 4), (h / 4) - 5, 3 * (w / 4), h / 2, '#ffffff');
      new Line(3 * (w / 4), (3 * (h / 4)) + 5, 3 * (w / 4), h / 2, '#ffffff');
      new Line((3 * (w / 4)) + 5, 3 * (h / 4), w / 2, 3 * (h / 4), '#ffffff');
      new Line((w / 4) - 5, 3 * (h / 4), w / 2, 3 * (h / 4), '#ffffff');
    }
}
window.onresize = resize;

var gui = new dat.GUI();
var move = gui.addFolder('Movement');
move.add(options, 'Travel');
move.add(options, 'Follow');
move.add(options, 'Avoid');
var music = gui.add(options, 'Music');
var text = gui.add(options, 'Text');

music.onChange(function(value) {
  paused = value;
  once = true;
});

text.onChange(function(value) {
  drawing = value;
  if (drawing) {
    Lines = [];
    new Line(w / 4, (h / 4) - 5, w / 4, h / 2, '#ffffff')
    new Line(w / 4, (3 * (h / 4)) + 5, w / 4, h / 2, '#ffffff');
    new Line((w / 4) - 5, h / 4, w / 2, h / 4, '#ffffff')
    new Line((3 * (w / 4)) + 5, h / 4, w / 2, h / 4, '#ffffff');
    new Line(3 * (w / 4), (h / 4) - 5, 3 * (w / 4), h / 2, '#ffffff');
    new Line(3 * (w / 4), (3 * (h / 4)) + 5, 3 * (w / 4), h / 2, '#ffffff');
    new Line((3 * (w / 4)) + 5, 3 * (h / 4), w / 2, 3 * (h / 4), '#ffffff');
    new Line((w / 4) - 5, 3 * (h / 4), w / 2, 3 * (h / 4), '#ffffff');
  } else {
    Lines = [];
  }
});

function Particle() {
  this.Alp = 0.3;
  this.maxSize = 10;
  if (!back) {
    this.x = Math.ceil(Math.random() * w);
    this.y = Math.ceil(Math.random() * h);
    this.radius = 0;
  } else {
    this.startx = randomBetween(-50, w + 50);
    this.starty = randomBetween(-50, h + 50);
    if (this.startx > 0 && this.startx < w) {
      this.x = Math.random() > .05 ? randomBetween(-50, 0) : randomBetween(w, w + 50);
    }
    if (this.starty > 0 && this.starty < h) {
      this.y = Math.random() > .05 ? randomBetween(-50, 0) : randomBetween(h, h + 50);
    }
    this.endX = (Math.random() * w) * Math.cos(getRadAnglePts(w / 2, h / 2, this.x, this.y));;
    this.endY = (Math.random() * h) * Math.sin(getRadAnglePts(w / 2, h / 2, this.x, this.y));;
    this.radius = this.maxSize;
  }
  this.iX = this.x;
  this.iY = this.y;
  this.vx = Math.cos(getRadAnglePts(w / 2, h / 2, this.x, this.y));
  this.vy = Math.sin(getRadAnglePts(w / 2, h / 2, this.x, this.y));
  particles[index++] = this;
  if (index > numPart - 1) {
    index = 0;
  }
}

Particle.prototype.move = function() {
  if (travel) {
    this.x += this.vx;
    this.y += this.vy;
    this.radius += getPtDistance(this.x, this.y, this.iX, this.iY) / 6000;
    this.vx = Math.cos(getRadAnglePts(w / 2, h / 2, this.x, this.y)) * this.radius;
    this.vy = Math.sin(getRadAnglePts(w / 2, h / 2, this.x, this.y)) * this.radius;
  } else if (follow) {
    this.x -= this.vx;
    this.y -= this.vy;
    this.radius += getPtDistance(this.x, this.y, this.iX, this.iY) / 6000;
    this.vx = Math.cos(getRadAnglePts(mouseX, mouseY, this.x, this.y)) * this.radius;
    this.vy = Math.sin(getRadAnglePts(mouseX, mouseY, this.x, this.y)) * this.radius;
  } else if (avoid) {
    this.x += this.vx;
    this.y += this.vy;
    this.radius += getPtDistance(this.x, this.y, this.iX, this.iY) / 6000;
    this.vx = Math.cos(getRadAnglePts(mouseX, mouseY, this.x, this.y)) * this.radius;
    this.vy = Math.sin(getRadAnglePts(mouseX, mouseY, this.x, this.y)) * this.radius;
  } else if (back) {
    this.x -= this.vx;
    this.y -= this.vy;
    if (this.radius > .1) {
      this.radius -= getPtDistance(this.x, this.y, this.endX, this.endY) / 6000;
    }
    this.vx = Math.cos(getRadAnglePts(w / 2, h / 2, this.x, this.y)) * this.radius;
    this.vy = Math.sin(getRadAnglePts(w / 2, h / 2, this.x, this.y)) * this.radius;
  }
}

Particle.prototype.draw = function() {
  this.move();
  if (this.radius > this.maxSize) {
    this.radius = this.maxSize;
  }
  if (this.radius < 1) {
    if (this.Alp < 1) {
        this.Alp += .05;
      }
      ctx.globalAlpha = this.Alp;
    } else {
      ctx.globalAlpha = 1;
    }
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
}

function draw() {
  stats.begin();
  frames++;
  midMouse();
  for (var i = 0; i < Lines.length; i++) {
    Lines[i].updateLine();
  }
  if(count > 15 && drawing){
    ctx.globalAlpha = .5;
    ctx.font = '30px Teko';
    ctx.fillText('404 Lost In Space', w/2 - 90, h/2 + 7);
  }
  new Particle();
  new Particle();
  new Particle();
  ctx.globalAlpha = 0.17;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 1;
  for (i = 0; i < particles.length; i++) {
    particles[i].draw();
  }
  if (paused) {
    if (once) {
      document.getElementById('m').play();
      once = false;
    }
  } else {
    if (once) {
      document.getElementById('m').pause();
      once = false;
    }
  }
  stats.end();
}
setup(60);
