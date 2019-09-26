let rows = 80;
let columns = 80;

function setup() {
  createCanvas(1000, 800);

  seed = random(1000);
  print(seed);
  randomSeed(seed);

  palette = colorPalette('blue');
  backgroundColor = palette[0];
  palette.shift();

  thickness = 5  * random();
  div = 30; // Controls zoom on 2d noise map
  xBorder = 10;
  yBorder = 10;
  maxShift = 100;

  xGap = (width / (columns));
  yGap = (height / (rows));
  radius = (xGap + yGap) / 3;
  frame = 0
}

function draw() {
  background(backgroundColor);
  for (let i = xBorder; i < columns + 1 - xBorder; i++) {
    for (let j = yBorder; j < rows + 1 - yBorder; j++) {

      // select color using noise & position:
      colorIndex = int(map(noise((i+frame) / div, j / div), 0, 1, 7, 1));

      // Draw each circle with shift, rough are noisy circles, whilst circletool is much faster:

      rough(i, j, palette[colorIndex], div, maxShift, frame,thickness, radius/1.25);
      //circletool(i, j, palette[colorIndex], div, maxShift, frame,thickness, radius/1);
    }
  }
  // Advance frame if creating an animation:
  // frame += 0.1
}