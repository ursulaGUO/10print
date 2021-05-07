/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

// const circle = `
//                    *** ### ### ***
//                *##                 ##*
//            *##                         ##*
//         *##                               ##*
//       *##                                   ##*
//     *##                                       ##*
//    *##                                         ##*
//   *##                                           ##*
//  *##                                             ##*
//  *##                                             ##*
//  *##                                             ##*
//  *##                                             ##*
//  *##                                             ##*
//   *##                                           ##*
//    *##                                         ##*
//     *##                                       ##*
//       *##                                   ##*
//         *#                                ##*
//            *##                         ##*
//                *##                 ##*
//                    *** ### ### ***`


/*const w = process.stdout.columns

function draw () {
  setTimeout(draw, 1000)
  let output = ''
  for (let i = 0; i < w; i++) {
    if (Math.random() > 0.5) {
      output += '屮';
    } else {
      output += '巾';
    }
  }
  console.log(output)
}

draw()*/

function dist(x0, y0, x1, y1) {
  return Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
}

function circle(side_length, x_off, y_off, radius) {
  let center_x = side_length / 2 + x_off;
  let center_y = side_length / 2 + y_off;
  for (let i = 0; i < side_length; i++) {
    for (let j = 0; j < side_length; j++) {
      let now = dist(center_x, center_y, i, j);
      if (now < radius + 1 && now >= radius) {
        process.stdout.write("0");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}

max = process.stdout.columns;
circle(max, 0, 0, max/2);