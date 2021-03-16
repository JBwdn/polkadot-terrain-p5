function circletool(xI, yI, color, thickness) {  

    // Translate to centre of circle:
    let xPos = 0.5 * xGap + (xI - 1) * xGap ;
    let yPos = 0.5 * yGap + (yI - 1) * yGap ;
    translate(xPos, yPos);
  
    // Draw shape:
    beginShape();
    stroke(color);
    strokeWeight(thickness);
    fill(color);
  
    quad(-0.3*xGap, -0.3*yGap, 0.6*xGap, -0.3*yGap, 0.3*xGap, 0.3*yGap, -0.6*xGap, 0.3*yGap)

    // Return to origin:
    translate(-xPos, -yPos);
  }
