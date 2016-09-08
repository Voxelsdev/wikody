/*
  This is a teaching library I created for an AP Computer Science class.
*/

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width = window.innerWidth,
  h = canvas.height = window.innerHeight,
  Lines = [],
  Circles = [],
  Rectangles = [],
  xStart = [],
  yStart = [],
  xEnds = [],
  yEnds = [],
  mouseX = 0,
  mouseY = 0,
  mousein = false,
  update = false;

/*
  Wheras the midpoint formula gets the x/y coordinate at
  1/2 the line, this helper returns any fraction (n/d)
  between a1 and a2.
*/
function getFrac(a1, a2, n, d) {
  return ((((d - n) / d) * a1) + ((n / d) * a2));
}

//gets the angle in radians bewteen 2 points.
function getRadAnglePts(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1);
}

//gets the angle in radians between 2 objects.
function getRadAngleObj(src, target) {
  return Math.atan2(target.y - src.y, target.x - src.x);
}

//gets angle in degrees.
function getDegAnglePts(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

//gets angle in degrees.
function getDegAngleObj(src, target) {
  return Math.atan2(target.y - src.y, target.x - src.x) * 180 / Math.PI;
}

//Degrees to Radians.
function toRadians(deg) {
  return (deg * Math.PI) / 180;
}

//Radians to Degrees.
function toDegrees(rad) {
  return (rad * 180) / Math.PI;
}

//random number between two inputs
function randomBetween(max, min) {
  return Math.floor(Math.random() * max - min) + min;
}

//assuming a and b are both objects with x/y properties.
function getObjDistance(a, b) {
  return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}

//assuming you are just using two points
function getPtDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

//distance between an object and the mouse
function getDistObjMouse(obj) {
  return Math.sqrt((obj.x - mouseX) * (obj.x - mouseX) + (obj.y - mouseY) * (obj.y - mouseY));
}

//distance between a point and the mouse
function getDistPtMouse(x, y) {
  return Math.sqrt((x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY));
}

//return a random 1 or -1
function randomSign() {
  return (Math.random() < 0.5 ? -1 : 1);
}

//uses mousein to tell whether the user is in the window
document.onmouseenter = function() {
  mousein = true;
};

document.onmouseleave = function() {
  mousein = false;
};

//mousemove event get mouse X and Y
document.onmousemove = function(e) {
  e = window.event || e;
  var cRe = canvas.getBoundingClientRect();
  mouseX = e.clientX - cRe.left;
  mouseY = e.clientY - cRe.top;
};

document.onmousedown = function(e) {
  update = true;
  switch (e.which) {
    case 1:
      //left
      break;
    case 2:
      //middle
      break;
    case 3:
      //right
      break;
    default:
      console.log('Not a recognized button!');
  };
}

document.onmouseup = function(e) {
  update = false;
  switch (e.which) {
    case 1:
      //left
      break;
    case 2:
      //middle
      break;
    case 3:
      //right
      break;
    default:
      console.log('Not a recognized button!');
  };
}

//returns a random HSL color
function randomColor() {
  return 'hsl(' + Math.ceil(Math.random() * 360) + ', 50%, 50%)';
}

//creates an array of given length, # paramaters
//corresponds to # of dimensions
function createArray(length) {
  var arr = new Array(length || 0),
    i = length;
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) {
      arr[length - 1 - i] = createArray.apply(this, args);
    }
  }
  return arr;
}

//between two rectangles
function R_hitTest(src, target) {
  if (src.x < target.x &&
    src.x + src.w > target.x &&
    src.y < target.y &&
    src.y + src.h > target.y) {
    return true;
  } else {
    return false;
  }
}

//between two circles
function C_hitTest(src, target) {
  if (getObjDistance(src, target) < target.radius) {
    return true;
  } else {
    return false;
  }
}

//returns wether or not the user is hovering over a rectangle.
//object must have w (width), and h (height) values.
function isHoveringRect(obj) {
  if (obj.x < mouseX && obj.x + obj.w > mouseX && obj.y < mouseY && obj.y + obj.h > mouseY) {
    return true;
  } else {
    return false;
  }
}

//returns wether or not the user is hovering over a circle object.
function isHoveringCirc(obj) {
  if (getPtDistance(obj.x, mouseX, obj.y, mouseY) < obj.radius) {
    return true;
  } else {
    return false;
  }
}

//Very advanced collision detection between irregular polygons.
//Would not reccoment using for rectangles, or circles.
//I did not write this, but cannot find the origional poster to give credit.
function collisionDetection() {
  this.initialize = function() {}

  this.hitTest = function(source, target) {
    var hit = false;
    var start = new Date().getTime();

    if (this.boxHitTest(source, target)) {
      if (this.pixelHitTest(source, target)) {
        hit = true;
      }
    }

    var end = new Date().getTime();
    console.log('detection took: ' + (end - start) + 'ms');

    return hit;
  }

  this.boxHitTest = function(source, target) {
    return !(
      ((source.y + source.height) < (target.y)) ||
      (source.y > (target.y + target.height)) ||
      ((source.x + source.width) < target.x) ||
      (source.x > (target.x + target.width))
    );
  }

  this.pixelHitTest = function(source, target) {
    for (var s = 0; s < source.pixelMap.data.length; s++) {
      var sourcePixel = source.pixelMap.data[s];
      var sourceArea = {
        x: sourcePixel.x + source.x,
        y: sourcePixel.y + source.y,
        width: source.pixelMap.resolution,
        height: source.pixelMap.resolution
      };
      for (var t = 0; t < target.pixelMap.data.length; t++) {
        var targetPixel = target.pixelMap.data[t];
        var targetArea = {
          x: targetPixel.x + target.x,
          y: targetPixel.y + target.y,
          width: target.pixelMap.resolution,
          height: target.pixelMap.resolution
        };

        if (this.boxHitTest(sourceArea, targetArea)) {
          return true;
        }
      }
    }
  }

  this.buildPixelMap = function(source, resolution) {
    var resolution = resolution || 1;
    var ctx = source.getContext("2d");
    var pixelMap = [];

    for (var y = 0; y < source.width; y = y + resolution) {
      for (var x = 0; x < source.height; x = x + resolution) {
        var pixel = ctx.getImageData(x, y, resolution, resolution);
        if (pixel.data[3] != 0) {
          pixelMap.push({
            x: x,
            y: y
          });
        }
      }
    }
    return {
      data: pixelMap,
      resolution: resolution
    };
  }

  this.initialize();

  return {
    hitTest: this.hitTest.bind(this),
    buildPixelMap: this.buildPixelMap.bind(this)
  }
}
///////// end collision detection \\\\\\\\\\

//Creates a line object!
function Line(xS, yS, xE, yE, color) {
  this.pos = Lines.length;
  this.rot = Math.random() * 360;
  this.color = color;
  this.updating = true; //for updateLine()
  this.forward = true;
  this.length = getPtDistance(xS, yS, xE, yE);
  this.n = 1;
  this.d = 60; //updateLine() will take (d) iterations.
  this.xS = xS;
  this.yS = yS;
  this.xE = xE;
  this.yE = yE;
  xStart.push(xS);
  yStart.push(yS);
  xEnds.push(xE);
  yEnds.push(yE);
  Lines.push(this);
}

//outright draws the line object
Line.prototype.draw = function() {
  ctx.beginPath();
  ctx.moveTo(this.xS, this.yS);
  ctx.lineTo(this.xE, this.yE);
  ctx.strokeStyle = this.color;
  ctx.stroke();
};

//can be used to dynamically draw a line.
//used in updateLine() and bounce()
Line.prototype.dynDraw = function(xS, yS, xE, yE) {
  ctx.beginPath();
  ctx.moveTo(xS, yS);
  ctx.lineTo(xE, yE);
  ctx.strokeStyle = this.color;
  ctx.stroke();
};

//progressivley, linerally, draws a line object from it's starting to ending point.
//advanced, and not really required. (It just makes line creation look nice)
Line.prototype.updateLine = function() {
  if (getFrac(this.xS, this.xE, this.n, this.d) != this.xE || getFrac(this.yS, this.yE, this.n, this.d) != this.yE) {
    this.dynDraw(this.xS, this.yS, getFrac(this.xS, this.xE, this.n, this.d), getFrac(this.yS, this.yE, this.n, this.d));
  } else {
    this.dynDraw(this.xS, this.yS, this.xE, this.yE);
  }
  if (this.updating) {
    if (this.n < this.d) {
      this.n++;
    } else {
      this.updating = false;
    }
  }
};

//Line bounces back and fourth
Line.prototype.bounce = function() {
  if (getFrac(this.xS, this.xE, this.n, this.d) != this.xE || getFrac(this.yS, this.yE, this.n, this.d) != this.yE) {
    this.dynDraw(this.xS, this.yS, getFrac(this.xS, this.xE, this.n, this.d), getFrac(this.yS, this.yE, this.n, this.d));
  } else {
    this.dynDraw(this.xS, this.yS, this.xE, this.yE);
  }
  if (this.forward) {
    if (this.n < this.d) {
      this.n++;
    } else {
      this.forward = false;
    }
  } else if (!this.forward) {
    if (this.n > 0) {
      this.n--;
    } else {
      this.forward = true;
    }
  }
}

Line.prototype.rotate = function() {
  this.xE += (this.length * Math.cos(toRadians(this.rot)));
  this.yE += (this.length * Math.sin(toRadians(this.rot)));
};

//Draws a line without object properties
function drawLine(xS, yS, xE, yE, color) {
  ctx.beginPath();
  ctx.moveTo(xS, yS);
  ctx.lineTo(xE, yE);
  ctx.strokeStyle = color;
  ctx.stroke();
}

//Creates a circle object which you can
//write a move/anything method for.
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.pos = Circles.length;
  Circles.push(this);
}

//draws circle objects.
Circle.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
};

//Draws a circle, no object required
function drawCircle(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

//Creates a rectangle object
function Rectangle(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;
  this.pos = Rectangles.length;
  Rectangles.push(this);
}

//Draws rectangle objects
Rectangle.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);
};

//Draws a plain rectangle, not an object.
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

//uses a draw method defined by the user to animate
function setup(framerate) {
  thread = setInterval(draw, 1000 / framerate);
}

//----------- extra notes for the class -----------\\
//            vvvvvvvvvvvvvvvvvvvvvvvvv            \\

/*
::::::::TO GET AN ANIMATION LOOP RUNNING::::::::

HTML:
<canvas id = 'canvas'></canvas>

////////////////////////////////////////////////
CSS:

* {
margin: 0;
padding: 0;
}
#canvas {
  background: #color;
}

////////////////////////////////////////////////
JS:

function draw(){
  ctx.fillStyle = "#color";
  ctx.fillRect(0,0,w,h);

  //do all moving and drawing and animating of objects below this line

}
setup(60);

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////



-------------------ABOUT JS---------------------

console.log('diagnostics');
^^^^^^^^^^^^^^^^ ------ very helpful for debugging!!
                        open console with CTRL + SHIFT + I

Declaring variables in JS:
var num = 0;
var arr = [];
var string = 'string';
^^^--- Everything uses 'var'!

Objects can have functions defined as parameters.

adding an object/num/string to an arr:
arr.push(whatever);

removing something from an array:
arr.splice(starting-pos, #toRemove);

for loops:
for(i = 0; i < max; i++){}

if/ else if/ else statements are the same.

while loops the same.

FUNCTIONS:
function doSomething(params){
  return(params);
}

FUNCTIONS IN JS DO NOT REQUIRE RETURN TYPES / STATEMENTS
same goes with variables. all are declared as var, no types required.
ex:
var arr = [];

CLASSES:
function className(params){
  this.params = params;
}

DEFINING METHODS FOR CLASSES:
ClassName.prototype.doSomething = function(params){
          ^^^^^^^^^ <------ Important!     ^^^^^^ usually none
  //do something
}

*/
