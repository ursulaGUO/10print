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

// function concentric(side_length, x_off, y_off, radius) {
//   let center_x = side_length / 2 + x_off;
//   let center_y = side_length / 2 + y_off;
//   for (let i = 0; i < side_length; i+=1) {
//     for (let j = 0; j < side_length; j+=1) {
//       for (let r = radius; r > 0 ; r -= 40) {
//         let now = dist(center_x, center_y, j, i);
//         if (Math.round(now) == Math.round(r) - 1) {
//           process.stdout.write("o");
//         } else {
//           process.stdout.write(" ");
//         }
//       }
//     }
//     process.stdout.write("\n");
//   }
// }

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function print (line) {
  console.log(line);
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function concentric(side_length, x_off, y_off, radius) {
  //109
  count = 0
  let arr = [];
  let center_x = side_length / 2 + x_off;
  let center_y = side_length / 2 + y_off;
  for (let i = 0; i < side_length; i+=1) {
    let line = "";
    for (let r = radius; r > 0 ; r -= 20) {
      for (let j = 0; j < side_length; j+=1) {
        let now = dist(center_x, center_y, j, i);
        if (Math.round(now) == Math.round(r) - 1) {
          line = line.concat("o");
          //process.stdout.write("o");
        } else {
          line = line.concat(" ");
        }
      }
    }
    // count ++;
    // console.log(count);
    arr.push(line);
  }
  return arr;
}

max = process.stdout.columns;

function get_random(min, max) {
  return Math.random() * (max - min) + min;
}

function draw () {
  setTimeout(draw, 5000);  
  
    let x_offcenter = get_random(- (Math.round(max - 100)), Math.round(max - 100));
    //console.log(x_offcenter);
    let y_offcenter = 0;
    //console.log(y_offcenter);
    let arr1 = concentric(max, x_offcenter, y_offcenter, max/2);

  
  var i = 0;

  function myLoop() {        
    setTimeout(function() {   
      process.stdout.write(arr1[i]);   
      i++;                    
      if (i < arr1.length) {           
        myLoop();             
      }                       
    }, 50)
  }
  myLoop(); 
}

function test() {
  let arr1 = concentric(max, -Math.round(max - 100), 0, max/2);

  var i = 0;

  function myLoop() {        
    setTimeout(function() {   
      console.log(arr1[i]);   
      i++;                    
      if (i < arr1.length) {           
        myLoop();             
      }                       
    }, 50)
  }
  myLoop(); 

}
//test();

draw();

//circle(max, 0, 0, max/2);
//concentric(max, 0, 0, max/2);

