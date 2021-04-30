var database, canvas;
var hi;

function setup() {
  database = firebase.database();
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  hi = new Form();
}

function draw() {
  background(rgb(46, 0, 252));
  hi.display();
}