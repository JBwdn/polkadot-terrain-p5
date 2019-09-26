function colorPalette(colorMode) {
  if (colorMode == 'random') {
    colorMode = random(['blue', 'red', 'green'])
  }
  if (colorMode == 'blue') {
    p = [
      [43, 40, 67], // Background
      [0, 40, 30], // Darkest shade
      [0, 50, 77],
      [0, 80, 128],
      [0, 110, 179],
      [0, 130, 230],
      [77, 169, 255],
      [128, 193, 255],
      [204, 230, 255], // Lightest shade 
    ];
    return p
  } else if (colorMode == 'green') {
    p = [
      [236, 250, 227],
      [0, 53, 7],
      [41, 53, 12],
      [55, 71, 12],
      [55, 99, 73],
      [55, 128, 73],
      [107, 128, 85],
      [130, 177, 117],
      [171, 214, 99],
    ];
    return p
  } else if (colorMode == 'red') {
    p = [
      [255, 245, 230],
      [103, 22, 26],
      [145, 22, 26],
      [156, 69, 26],
      [160, 47, 95],
      [182, 57, 95],
      [246, 105, 95],
      [254, 147, 124],
      [254, 194, 187],
    ];
    return p
  } else if (colorMode == 'grey') {
    p = [
      [255],
      [0],
      [50],
      [75],
      [100],
      [125],
      [150],
      [175],
      [200],
    ];
    return p
  }
}