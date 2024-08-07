
function setup() {

  
  createCanvas(800, 800);
  background(0);
  let polygonGrid1 = new PolygonGrid(13, 11, 40, 6);


  polygonGrid1.display();


  
}

function draw() {
  noLoop();
}
