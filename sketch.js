// Drawing settings:
let rows = 100;
let columns = 100;

// Recording settings:
let fps = 10;
var startMillis;
var duration = 300000; // in milliseconds...
var capturer = new CCapture({ format: 'png', framerate: fps });

function setup() {
  createCanvas(1280, 720);

  // seed = random(1000);
  // print(seed);
  randomSeed(926.7887722499046);

  palette = colorPalette('pastel');
  backgroundColor = palette[0];
  palette.shift();

  thickness = 20;
  div = -1.5; // Controls zoom on 2d noise map
  xBorder = -2;
  yBorder = -2;
  maxShift = 100;

  xGap = (width / (columns));
  yGap = (height / (rows));
  frame = 0

  // Recording:
  frameRate(fps);
  capturer.start();
}

function draw() {
  // Start timer for saving frames to file:
  if (startMillis == null) {
    startMillis = millis();
  }

  // Draw frame:
  background(backgroundColor);
  for (let i = xBorder; i < columns + 1 - xBorder; i++) {
    for (let j = yBorder; j < rows + 1 - yBorder; j++) {

      // select color:
      colorIndex = int(map(noise((i+frame) / div, j / div), 0, 1, 7, 1));
      cell_color = palette[colorIndex];
      circletool(i, j, cell_color, thickness);
    }
  }

  // Once the video duration is reached, saved to file:
  if (millis() - startMillis > duration) {
    noLoop()
    capturer.stop();
    capturer.save();
    return;
  }

  console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));

  // Advance frame if creating an animation:
  frame += 0.1;
  div += 0.001;
  noLoop()
}
