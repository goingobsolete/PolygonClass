
let inputbg;
let bgimg;

let windowCanvasRatio, aspectRatio;
let canvasWidth, canvasHeight;

// function preload() {

//   bgimg = loadImage("images/vulturineGuineaFowl.jpeg");

// }

function setup() {

  aspectRatio = (16/9);
  windowCanvasRatio = (3/4);
  canvasHeight = (windowHeight * windowCanvasRatio);
  canvasWidth = (canvasHeight * aspectRatio);


  createCanvas(canvasWidth, canvasHeight, P2D);
  background(255);

  // Create file input
  inputbg = createFileInput(handleFile);
  inputbg.position(windowWidth / 20 * 17, windowHeight / 20);

  noLoop();

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

  if (bgimg) {
    // Draw the loaded image on the canvas
    imageMode(CENTER);
    translate(canvasWidth/2,canvasHeight/2);
    image(bgimg, 0, 0, bgimg.width, bgimg.height);

  
  noLoop();

  
}}
