
function setup() {

  
  createCanvas(windowWidth, windowHeight, P2D);
  background(255);

  // //Hard coded
  // let xTiles = 200;
  // let yTiles = 122;
  // let radius = 5;
  // let numSides = 6;
  
  //dynamic
  let numSides = 6;
  let radius = 20;
  let xTiles = ((windowWidth / (radius*1.5))-1);
  let yTiles = ((windowHeight / (radius*Math.sqrt(3))-1))

  let polygonGrid = new PolygonGrid(xTiles, yTiles, radius, numSides);


  polygonGrid.display();


  
}

function draw() {
  imageMode(CENTER);
  noLoop();
}
