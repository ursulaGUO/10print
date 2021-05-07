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
  for (let i = 0; i < side_length; i+=1) {
    for (let j = 0; j < side_length; j+=1) {
      let now = dist(center_x, center_y, j, i);
      if (Math.round(now) == Math.round(radius) - 1) {
        process.stdout.write("o");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}

console.log(dist(0,0,2.5,2.5));

max = process.stdout.columns;
circle(max, 0, 0, max/2);