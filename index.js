/*jshint esversion: 6*/
let changeColorButton;
let changeTextColorButton;
let changeClockSizeButton;
let changeFontInput;
let myMonth;
let myDate;
let myDay;
let myClock;
let myFont;
let d;
let days;
let months;

window.onload = function () {
  init();
};

function init() {
  changeColorButton = document.querySelector('#colorButton');
  changeTextColorButton = document.querySelector('#textColorButton');
  changeClockSizeButton = document.querySelector('#clockSizeButton');
  changeFontInput = document.querySelector('#font');

  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeTextColorButton.addEventListener('click', changeTextColor);
  changeClockSizeButton.addEventListener('click', changeClockSize);
  changeFontInput.addEventListener('input', (event) => {
    changeFont(changeFontInput.selectedIndex);
  });

  myMonth = document.getElementById("myMonth");
  myDate = document.getElementById("myDate");
  myDay = document.getElementById("myDay");
  myClock = document.getElementById("myClock");

  days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev",
    "Neljapäev", "Reede", "Laupäev"
  ];

  months = ["Jaanuar", "Veebruar", "Märts",
    "Aprill", "Mai", "Juuni", "Juuli", "August", "September",
    "Oktoober", "November", "Detsember"
  ];

  window.setInterval(function () {
    d = new Date();
    myClock.innerHTML = clock();
    myDate.innerHTML = d.getDate() + ". " + months[d.getMonth()];
    myDay.innerHTML = days[d.getDay()];
  }, 1000);

}

function changeBackgroundColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

function changeTextColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.color = `rgb(${r}, ${g}, ${b})`;
}

function changeClockSize() {
  myClock.style.fontSize = Math.random() * (250 - 50) + 50 + "px";
}

function changeFont(selection) {
  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontfamily2
  var listValue = changeFontInput.options[selection].text;
  document.body.style.fontFamily = listValue;
}

function clock() {
  var h = d.getHours(); // 0 - 23
  var m = d.getMinutes(); // 0 - 59
  var s = d.getSeconds(); // 0 - 59

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s;
  return time;
}