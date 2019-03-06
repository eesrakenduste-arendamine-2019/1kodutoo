
 var clockContainer = document.getElementById("clock");

 window.onload = function() {
 	document.getElementById("clock").innerHTML = getCurrentDateTime();
 };

 window.setInterval(function() {
 	document.getElementById("clock").innerHTML = getCurrentDateTime();
 }, 1000);

 var getCurrentDateTime = function() {
 	var currentDate = new Date();
 	var hours = currentDate.getHours();
 	var minutes = currentDate.getMinutes();
 	var seconds = currentDate.getSeconds();
 	var days = currentDate.getDate();
 	var month = currentDate.getMonth() + 1;
 	var year = currentDate.getFullYear();
 	var weekDay = currentDate.getDay();

 	var dateString = "On " + getWeekDay(weekDay) +"<br>"+ addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "<br>" + addZero(days) + "." + addZero(month) + "." + year;

 	return dateString;
};

 function getWeekDay(number) {
 	var weekDays = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

 	return weekDays[number];
 }

 function addZero(number) {
 	if (number < 10) {
 		number = "0" + number;
 	}
 	return number;
 }
