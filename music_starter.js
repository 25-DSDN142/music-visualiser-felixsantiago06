
// vocal, drum, bass, and other are volumes ranging from 0 to 100
// Dot Grid
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

  // Colour mode set to RGB, and no stroke for dots
  colorMode(RGB, 255);
  noStroke();

  // Visualizer Settings
  let dotSpacing = 30;
  let baseDotSize = 8;

  // four sections
  let sectionWidth = width / 4;
  
  // Dot grid now sectioned
  // Loop through columns
  for (let xIndex = 0; xIndex < width; xIndex += dotSpacing) {
    let x = xIndex + dotSpacing;

    // Determines height and colour of the column based on what section it's in
    let maxColumnHeight = 0;
    let fillColor;

   // Determine the height of the column based on the section 
   if (x < sectionWidth) {
 if (x < sectionWidth) {
      maxColumnHeight = map(vocal, 0, 100, 0, height / 2.5);
      fillColor = '#ec93d8'; // Pastel Pink
    } else if (x < sectionWidth * 2) {
      maxColumnHeight = map(drum, 0, 100, 0, height / 2.5);
      fillColor = '#acec93'; // Pastel Green
    } else if (x < sectionWidth * 3) {
      maxColumnHeight = map(bass, 0, 100, 0, height / 2.5);
      fillColor = '#93a8ec'; // Pastel Blue
    } else {
      maxColumnHeight = map(other, 0, 100, 0, height / 2.5);
      fillColor = '#eccc93'; // Pastel Orangish Yellow
    }
      // Loop through rows
      for (let y = height / 2; y >= height / 2 - maxColumnHeight; y -= dotSpacing) {
      // Each dot drawn
      fill(fillColor);
      ellipse(x, y, baseDotSize);
    }
  }
}