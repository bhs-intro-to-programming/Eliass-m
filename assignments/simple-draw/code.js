/*
 * This code is running in an environment with five functions defined:
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *    Draws a line from x1,y1 to x2,y2 using the give color. The fifth argument,
 *    lineWidth, is optional and defaults to 1.
 *
 *  drawCircle(x, y, r, color, lineWidth=1)
 *
 *    Draws a circle centered at x,y with radius r using the given color. The
 *    fith argument, lineWidth, is optional and defaults to 1.
 *
 *  drawRect(x, y, width, height, color, lineWidth=1)
 *
 *    Draws a rectangle starting at x,y with the given width, height, and color.
 *    Positive widths go to the right and negative to the left; positive heights
 *    go down and negative heights go up. The sixth argument, lineWidth, is
 *    optional and defaults to 1.
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *    Draws a filled rectangle starting at x,y with the given width, height, and
 *    color. Positive widths go to the right and negative to the left; positive
 *    heights go down and negative heights go up.
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *    Draws a filled circle centered at x,y with radius r using the given color.
 *
 * There are also a couple variables that might be useful:
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 */



drawFilledRect(0, 0, 600, 600, 'black');

drawLine(250, 500, 250, 350, 'purple')

drawCircle(width/2, height/2, 51, 'red');

drawFilledCircle(width - 250, height - 300, 50, 'black');

drawLine(200, 400, 300, 400, 'purple')

drawLine(250, 500, 300, 550, 'purple')

drawLine(200, 550, 250, 500, 'purple')