/*jshint esversion:6*/
	function original() {
		document.getElementById('day').style.fontSize = "25px";
		document.getElementById('date').style.fontSize = "25px";
		document.getElementById('time').style.fontSize = "65px";
	

    }

	function increaseFontSize() {
		document.getElementById('day').style.fontSize = "45px";
		document.getElementById('date').style.fontSize = "45px";
		document.getElementById('time').style.fontSize = "85px";
    }

	window.onload = setInterval(clock,1000);

    function clock()
    {
	  var d = new Date();


	  var date = d.getDate();

	  var month = d.getMonth();
	  var montharr =["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
	  month=montharr[month];


	  var day = d.getDay();
	  var dayarr =["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
	  day=dayarr[day];

	  var hour =d.getHours();
          var min = d.getMinutes();
	  var sec = d.getSeconds();

	  document.getElementById("day").innerHTML=day;
	  document.getElementById("date").innerHTML=date+" "+month;
	  document.getElementById("time").innerHTML=hour+":"+min+":"+sec;
	  document.getElementById('time').onclick = changeColor; 

    }


function color() {
  document.body.style.background=document.getElementById('color').value;
}


function changeColor() {
  document.getElementById("time").style.color = "#ff0000";
  document.getElementById("date").style.color = "#ff0000";
  document.getElementById("day").style.color = "#ff0000";
}

function changeColor1() {
  document.getElementById("time").style.color = "blue";
  document.getElementById("date").style.color = "blue";
  document.getElementById("day").style.color = "blue";
}


window.onload=init;

