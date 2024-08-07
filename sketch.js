// let polygon;


function setup() {
  // const canvasWidth = 800;
  // const canvasHeight = 800;
  
  // const rows = 10;
  // const cols = 10;
  // const radius = canvasWidth/(cols*2) //only for regular Polygons

  // createCanvas(canvasWidth, canvasHeight);
  // let polygonGrid = new PolygonGrid(rows, cols, radius, 6);
  // polygonGrid.display();
  
  createCanvas(800, 800);
  background(0);
  let polygonGrid1 = new PolygonGrid(10, 10, 40, 6);


  polygonGrid1.display();


  
}

function draw() {
  noLoop();
}
