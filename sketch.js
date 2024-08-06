let polygon;

function setup() {
  createCanvas(400, 400);
  polygon = new Polygon(200, 200, 30, 6, "black");
}

function draw() {
  background("yellow");
  polygon.draw();
}
