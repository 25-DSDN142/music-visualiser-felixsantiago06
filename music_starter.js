let noiseOffset = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
// changes 
   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
  // Set the background color to a neutral gray
  // Bg colour
  background(100);
  // Background white
  background(255);
  colorMode(RGB, 255);
  noStroke();

  // Visualizer Settings
  let dotSpacing = 30;
  let baseDotSize = 8;
  let mappedDotSize = map((vocal + drum + bass + other) / 4, 0, 100, baseDotSize, baseDotSize * 2.5);
  let sectionWidth = width / 4;
  let numDotsX = floor((width - 2 * dotSpacing) / dotSpacing) + 1;
  
  // Main Visualizer Loop with Reflection
  for (let xIndex = 0; xIndex < numDotsX; xIndex++) {
    let x = dotSpacing + xIndex * dotSpacing;
    let noiseVal = noise(xIndex * 0.1, noiseOffset);
    let fluctuation = map(noiseVal, 0, 1, -50, 50);
    let maxColumnHeight = 0;
    let fillColor;

    if (x < sectionWidth) {
      maxColumnHeight = map(vocal, 0, 100, 0, height / 3);
      fillColor = '#ec93d8';
    } else if (x < sectionWidth * 2) {
      maxColumnHeight = map(drum, 0, 100, 0, height / 3);
      fillColor = '#acec93';
    } else if (x < sectionWidth * 3) {
      maxColumnHeight = map(bass, 0, 100, 0, height / 3);
      fillColor = '#93a8ec';
    } else {
      maxColumnHeight = map(other, 0, 100, 0, height / 3);
      fillColor = '#eccc93';
    }

    for (let y = height / 2 - dotSpacing; y >= height / 2 - maxColumnHeight - fluctuation; y -= dotSpacing) {
      fill(fillColor);
      ellipse(x, y, mappedDotSize);
    }
  }

  // Reflection Visualizer Loop
  for (let xIndex = 0; xIndex < numDotsX; xIndex++) {
    let x = dotSpacing + xIndex * dotSpacing;
    let noiseVal = noise(xIndex * 0.1, noiseOffset);
    let fluctuation = map(noiseVal, 0, 0.6, -50, 50);
    let maxColumnHeight = 0;
    let fillColor;

    if (x < sectionWidth) {
      maxColumnHeight = map(vocal, 0, 100, 0, height / 3);
      fillColor = '#ec93d8';
    } else if (x < sectionWidth * 2) {
      maxColumnHeight = map(drum, 0, 100, 0, height / 3);
      fillColor = '#acec93';
    } else if (x < sectionWidth * 3) {
      maxColumnHeight = map(bass, 0, 100, 0, height / 3);
      fillColor = '#93a8ec';
    } else {
      maxColumnHeight = map(other, 0, 100, 0, height / 3);
      fillColor = '#eccc93';
    } 

    for (let y = height / 2 + dotSpacing; y <= height / 2 + maxColumnHeight + fluctuation; y += dotSpacing) {
      let yOffset = y - height / 2;
      let reflectionAlpha = map(yOffset, 0, height / 2, 70, 100);

      fill(red(fillColor), green(fillColor), blue(fillColor), reflectionAlpha);
      ellipse(x, y, mappedDotSize);
    }
  }

  noiseOffset += 0.006;
}