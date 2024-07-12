function counter(){
    
var myDate = new Date();
var curr = myDate.getTime();
// document.write(curr);

var ramadan = new Date("February 28, 2025"); //set ramazan date
var nextRamadan = ramadan.getTime();
// document.write("<br>"+ nextRamadan);

var differenceInMS = nextRamadan - curr;

// document.write("<br>"+ differenceInMS + " mili sec");

var differenceInDays = differenceInMS / (1000 * 60 * 60 * 24) ;
// document.write(" <br><br>"+ Math.floor(differenceInDays)+ " days");

var a = (differenceInDays - Math.floor(differenceInDays) ) * 24; //gives hours in decimal form
// document.write(" &nbsp"+ Math.floor(a) + " hours");

var b = (a - Math.floor(a) ) * 60;

// document.write(" &nbsp" + Math.floor(b)  + " minutes");

var c = (b - Math.floor(b) ) * 60;

// document.write(" &nbsp" + Math.floor(c)  + " seconds");

///////////////////////////////////////////////////////////

var day =  document.getElementById('days');
day.innerHTML = "<h1>" + Math.floor(differenceInDays) + "</h1>Days";

var hour = document.getElementById('hours');
hour.innerHTML = "<h5>" + Math.floor(a) + "</h5>Hours";

var mins = document.getElementById('min');
mins.innerHTML = "<h5>" + Math.floor(b) + "</h5>Minutes";

var sec = document.getElementById('sec');
sec.innerHTML = "<h5>" + Math.floor(c) + "</h5>Seconds";
}

setInterval('counter()', 1000);
counter();