var x1 = 150;
var y1 = 0;
var x2 = 250;
var y2 = 0 ;
var x3 = 80; 
var y3 = 125 ;
function setup(){
  createCanvas(500,500);
}

function draw(){
  noStroke();
  background(300);

  // Put time in variables for easy testing
  var s = second();
  var m = minute();
  var h = hour();
  // min state
  // var s = 0;
  // var m = 0;
  // var h = 0;
  // max state
  //var s = 60;
  //var m = 60;
  //var h = 24;
  var width =50;
  var height =190;
  fill(155,100,0,150)
  quad(x1,y1,x2,y2, x3, y3, map(s, 0, 60, 0, width), height);
  fill(155,155,50,150) 
  quad(x1,y1,x2,y2, x3, y3, map(m, 0, 60, x1, 0), map(m, 0, 60, y2+(x3-x2), height));
  fill(50,50,55,150) 
  quad(x1,y1,x2,y2, x3, y3, x2 ,map(h, 0, 24, y3, height));
  // Example print statements (they do exactly the same thing, use 1 at a time)
  // console.log(map(s, 0, 60, 0, width), height);
  // print(map(s, 0, 60, 0, width), height);
}
