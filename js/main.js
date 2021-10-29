//  var currentTime =new Date();//this is Date() function used to find out current time depending on browser
//  console.log(currentTime);
//  var currentYear =new Date().getFullYear();//getFullYear() method selects only year
//  console.log(currentYear);

//  var nextYear = new Date(`Jan 01 ${currentYear+1} 00:00:00`);
//  console.log(nextYear);

//  var diff = nextYear-currentTime;
//  console.log(diff);

//  var Second = diff/1000;
//  console.log(Second);

//  var floorSecond = Math.floor(diff/1000);
//  console.log(floorSecond);

//  var remainingSecond = floorSecond%60;
//  console.log("Remaining Second:"+remainingSecond);

//  var Minute = floorSecond/60;
//  console.log("minute:"+ Minute);

//  var remainingMinute = Math.floor(minute % 60);
//  console.log("Remaining Minute:"+ remainingMinute);


 var year = document.getElementById('year');
 var days = document.getElementById('days');
 var hours = document.getElementById('hours');
 var minute = document.getElementById('minute');
 var second = document.getElementById('second');

var currentYear =new Date().getFullYear();
var nextYear = new Date(`Jan 01 ${currentYear+1} 00:00:00`);

function countDown(){

    var currentTime =new Date();
    var diff = nextYear-currentTime;

    var S = Math.floor((diff/1000)%60);
    second.innerHTML =( S<10 ) ? "0"+ S : S;

    var M = Math.floor((diff/1000/60)%60);
    minute.innerHTML =( M<10 ) ? "0" + M : M;

    var H = Math.floor((diff/1000/60/60) % 24);
    hours.innerHTML =( H<10 ) ? "0" + H : H;

    var D = Math.floor((diff/1000/60/60) / 24);
    days.innerHTML = D;

}
year.innerHTML = nextYear.getFullYear();


setInterval(countDown, 1000);
 