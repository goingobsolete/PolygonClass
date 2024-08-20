
function setup() {

  
  createCanvas(windowWidth, windowHeight, P2D);
  background(255);

  let xTiles = 200;
  let yTiles = 122;
  let radius = 5;
  let numSides = 6;
  

  let polygonGrid = new PolygonGrid(xTiles, yTiles, radius, numSides);


  polygonGrid.display();


  
}

function draw() {
  noLoop();
}
