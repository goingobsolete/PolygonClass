let polygon;


function setup() {
  const canvasWidth = 800;
  const canvasHeight = 800;
  
  const rows = 10;
  const cols = 10;
  const radius = canvasWidth/(cols*2) //only for regular Polygons

  createCanvas(canvasWidth, canvasHeight);
  let polygonGrid = new PolygonGrid(rows, cols, radius, 6);
  polygonGrid.display();
}

function draw() {
  noLoop();
}
