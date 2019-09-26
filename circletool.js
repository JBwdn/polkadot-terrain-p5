function circletool(xI, yI, color, div, maxShift, frame, thickness, radius) {  
    // Shift circle according to mapped noise:
    let xShift = map(noise((xI+frame) / div, yI / div), 0, 1, -maxShift, maxShift);
    let yShift = map(noise((xI+frame)/ div, yI / div), 0, 1, -maxShift, maxShift);
  
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
  
    circle(0,0,radius)
  
    // Return to origin:
    translate(-xPos, -yPos);
  }