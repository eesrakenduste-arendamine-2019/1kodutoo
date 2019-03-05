const intervall = setInterval(function() {
  myClock();
}, 1000);

function myClock() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var y = d.getFullYear();
  var day = d.getDate();

  var days = new Array(7);
  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";
  var n = days[d.getDay()];

  var months = new Array(12);
  months[0] = "january";
  months[1] = "february";
  months[2] = "march";
  months[3] = "april";
  months[4] = "may";
  months[5] = "june";
  months[6] = "july";
  months[7] = "august";
  months[8] = "september";
  months[9] = "october";
  months[10] = "november";
  months[11] = "december";
  var k = months[d.getMonth()];

  document.getElementById('clock').innerHTML =
  h + "•" + m + "•" + s + "<br>" + n + "<br>" +  day + "." + k + "." + y;

}

function hideClock() {
	var x = document.getElementById("clock");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function bigger() {
	var y = document.getElementById("clock");
    y.style.fontSize = '50px';
}

function smaller() {
	var y = document.getElementById("clock");
    y.style.fontSize = '20px';
}

function normal() {
	var y = document.getElementById("clock");
		y.style.fontSize = '35px';
    y.style.fontFamily = 'Montserrat';
  var x = document.getElementById("clock");
    x.style.display = "block";
}

function helveticafont() {
	var y = document.getElementById("clock");
		y.style.fontFamily = 'Helvetica';
}

function verdanafont() {
	var y = document.getElementById("clock");
		y.style.fontFamily = 'Verdana';
}
