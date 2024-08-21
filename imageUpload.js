// let inputbg;
// let bgimg;  // Declare a global variable to store the p5.Image

// function setup() {
//   createCanvas(400, 400);
  
//   // Create file input
//   input = createFileInput(handleFile);
//   input.position(windowWidth / 20 * 17, windowHeight / 20);
// }

function handleFile(file) {
  if (file.type === 'image') {
    // Load the image into a p5.Image object and store it in the global variable
    bgimg = loadImage(file.data, () => {
        

        redraw()
    });
  } else {
    print("Not an image file!");
  }
}


//  // replace redraw with imageLoaded if you want to directly do it

// function imageLoaded() {
//   // Once the image is loaded, draw it to the canvas
//   image(bgimg, 0, 0, width, height);
// }

// function draw() {
//   // Optionally, you can clear the canvas or make other updates in the draw loop
// }