let polygon;

function setup() {
  createCanvas(400, 400);
  polygon = new Polygon(width/2, height/2, 30, 6);
}

function draw() {
  background(220);
  fill("#FFFF00");
  polygon.draw();

}
