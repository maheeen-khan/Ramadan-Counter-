var myDate = new Date();
var curr = myDate.getTime();
document.write(curr);

var ramadan = new Date("February 28, 2025");
var nextRamadan = ramadan.getTime();
document.write("<br>"+ nextRamadan);

var differenceInMS = nextRamadan - curr;

document.write("<br>"+ differenceInMS + " mili sec");

var differenceInDays = differenceInMS / (1000 * 60 * 60 * 24) ;
document.write(" <br><br>"+ Math.floor(differenceInDays)+ " days");

// var differenceInDays = Math.floor(differenceInDays)  //+ " days";
var a = (differenceInDays - Math.floor(differenceInDays) ) * 24; //gives hours in decimal form
document.write(" &nbsp"+ Math.floor(a) + " hours");

var b = (a - Math.floor(a) ) * 60;

document.write(" &nbsp" + Math.floor(b)  + " minutes");

var c = (b - Math.floor(b) ) * 60;

document.write(" &nbsp" + Math.floor(c)  + " seconds");


// document.write(" &nbsp" + Math.floor(a*280) + " seconds");

////////////Hours//////////////////

// var differenceforHours = new Date("March 1, 2025").getTime() - new Date().getTime();
// var hours = differenceforHours / (1000 * 60 * 60);
// var hours = Math.floor(hours) + " hours";

// document.write(" &nbsp&nbsp&nbsp&nbsp&nbsp"+ hours);

// ///////////////Minutes///////////////
// var minutes = differenceforHours / (1000 * 60);
// var minutes = Math.floor(minutes) + " minutes";

// document.write(" &nbsp&nbsp&nbsp&nbsp&nbsp"+ minutes);
