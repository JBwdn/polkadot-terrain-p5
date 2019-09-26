function rough(xI, yI, color, div, maxShift, frame,thickness, radius) {
  // Draw a noisy circle:
  let noiseMax = 3; // Perlin noise intensity for blob shape

  // Shift circle according to mapped noise:
  let xShift = map(noise((xI+frame) / div, yI / div), 0, 1, -maxShift, maxShift);
  let yShift = map(noise((xI+frame)/ div, yI / div), 0, 1, -maxShift, maxShift);

  // Adjust shift according to cos function:
  // xShift += map(cos((yI-yBorder)/13), 0, 1, -maxShift/3, maxShift/3)
  // yShift += map(cos((xI-xBorder)/13), 0, 1, -maxShift/3, maxShift/3)

  // Translate to centre of circle:
  let xPos = 0.5 * xGap + (xI - 1) * xGap + xShift;
  let yPos = 0.5 * yGap + (yI - 1) * yGap + yShift;
  translate(xPos, yPos);

  // Draw shape:
  beginShape();
  stroke(color);
  strokeWeight(thickness);
  fill(color);
  //noFill();

  for (let a = 0; a < TWO_PI; a += 0.01) {
    // Offset in perlin noise space:
    let xoff = map(cos(a), -1, 1, 0, noiseMax) + xPos;
    let yoff = map(sin(a), -1, 1, 0, noiseMax) + yPos;

    // Map perlin noise output to radius of circle:
    let r = map(noise(xoff, yoff), 0, 1, radius / 4, radius / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Return to origin:
  translate(-xPos, -yPos);
}