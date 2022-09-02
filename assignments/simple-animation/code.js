const drawFrame = (time) => {
  clear();
  
  drawFilledCircle((time / 7) % width, (time/ 8.75) % height, 25, 'black');
  drawFilledCircle((time / 8) % width, (time/ 10) % height, 25, 'black');
  drawFilledCircle((time / 9) % width, (time/ 11.25) % height, 25, 'black');
  drawFilledCircle((time / 10) % width, (time/ 12.50) % height, 25, 'black');
  drawFilledCircle((time / 11) % width, (time/ 13.75) % height, 25, 'black');
  drawFilledCircle((time / 12) % width, (time/ 15) % height, 25, 'black');
};

animate(drawFrame);