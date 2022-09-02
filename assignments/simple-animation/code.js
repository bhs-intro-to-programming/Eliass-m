const drawFrame = (time) => {
  clear();
   
  drawFilledCircle((time / 1) % width, (time/ 1.25) % height, 25, 'black');
  drawFilledCircle((time / 2) % width, (time/ 2.50) % height, 25, 'black');
  drawFilledCircle((time / 3) % width, (time/ 3.75) % height, 25, 'black');
  drawFilledCircle((time / 4) % width, (time/ 5) % height, 25, 'black');
  drawFilledCircle((time / 5) % width, (time/ 6.25) % height, 25, 'black');
  drawFilledCircle((time / 6) % width, (time/ 7.50) % height, 25, 'black');
  drawFilledCircle((time / 7) % width, (time/ 8.75) % height, 25, 'black');
  drawFilledCircle((time / 8) % width, (time/ 10) % height, 25, 'black');
  drawFilledCircle((time / 9) % width, (time/ 11.25) % height, 25, 'black');
  drawFilledCircle((time / 10) % width, (time/ 12.50) % height, 25, 'black');

};

animate(drawFrame);