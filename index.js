   
	function decreaseFontSize() {
        document.getElementById('day').style.fontSize = "15px";
		document.getElementById('date').style.fontSize = "15px";
		document.getElementById('time').style.fontSize = "55px";


    }
	
	function increaseFontSize() {
        document.getElementById('day').style.fontSize = "35px";
		document.getElementById('date').style.fontSize = "35px";
		document.getElementById('time').style.fontSize = "75px";
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

    }


function color() {
  document.body.style.background=document.getElementById('color').value;
}


window.onload=init;




