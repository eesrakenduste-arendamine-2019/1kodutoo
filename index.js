Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    wd = now.getDay(),
    yr = now.getFullYear();
     var days = ["Pühapäev","Esmasp","Teisi","Kolmap","Väke reede","Reede","Pidu"];
     var months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

    var tags = ["wd", "d", "mon", "y", "h", "m", "s", "mi"],
    corr = [days[wd], dy, months[mo], yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}


//kujundus
//document.onclick=changeElement;

function changeElement() {
  var div = document.getElementById("div1");

  div.style.backgroundColor="#A1A1A1";
  div.style.width="200px";
  div.style.color="#fff";
  div.style.height="100px";
  div.style.paddingLeft="50px";
  div.style.paddingTop="50px";
  div.style.fontFamily="Verdana";
  div.style.fontSize="1em";
  div.style.left="10px";
  div.style.top="100px";
  div.style.marginRight="100px";
}
