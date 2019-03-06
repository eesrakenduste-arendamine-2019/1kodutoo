function clock(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var day = date.getDay();
  var kuu = date.getMonth();
  var kuupaev = date.getDate();
  var kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
  var kuu = kuud[kuu];
  var nadalapaevad = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
  var day = nadalapaevad[day];

  if (h < 10) {h = "0" + h;}
  if (m < 10) {m = "0" + m;}
  if (s < 10) {s = "0" + s;}
  var kell = h + ":" + m + ":" + s;
  document.getElementById("aeg").innerHTML = kell;
  document.getElementById("kuupaev").innerHTML = day + ", " + kuupaev + ". " + kuu;
  setTimeout(clock, 1000);
}
function changeColor(clr){
  document.getElementById("aeg").style.color = clr;
  document.getElementById("kuupaev").style.color = clr;
}
function clockSize(x, y){
  document.getElementById("aeg").style.fontSize = x;
  document.getElementById("kuupaev").style.fontSize = y;
}
clock();
