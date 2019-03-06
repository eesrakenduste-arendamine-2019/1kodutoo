/*jshint esversion: 6*/
let myFunction;
window.onload = function () {


    var clock = document.querySelector('.clock');
    const hands = document.querySelectorAll('.clock>.hand');
    const hr_h = hands[0];
    const min_h = hands[1];
    const sec_h = hands[2];
    const box = document.querySelector('.box');
    const timebox = document.querySelector('.timebox');
    let s, i;
    for (i = 0; i < 360; i += 6) {
        if (i % 5 == 0) {
            s = document.createElement('div');
            s.className = 'line b';
            s.style.transform = `rotate(${i}deg)`;
            box.appendChild(s)
        } else {
            s = document.createElement('div');
            s.className = 'line';
            s.style.transform = `rotate(${i}deg)`;
            box.appendChild(s)

        }

    };
    const run = () => {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var msec = now.getMilliseconds();
        let h = '0' + hr, m = '0' + min, s = '0' + sec;

        timebox.innerHTML = h.slice(h.length - 2, h.length) + ':' + m.slice(m.length - 2, m.length) + ':' + s.slice(s.length - 2, s.length);

        hr_h.style.transform = `rotate(${hr * 30 + min * 0.5}deg)`;
        min_h.style.transform = `rotate(${min * 6 + sec * 0.1}deg)`;
        sec_h.style.transform = `rotate(${sec * 6 + msec * 0.006}deg)`;


        setTimeout(run, 40);
    }
    var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    months = [ "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
    document.getElementById('daymonthyear').innerHTML = day + " " + months[month] + "  " + year;



    run();

    let changeColorButton;


    window.onload = function(){
      init();
    };

    function init(){
      changeColorButton = document.querySelector('#clockButton');


      changeColorButton.addEventListener('click', changeClockColor); //klikkil muudab
      //window.addEventListener('click', changeClockColor); //hiire liigutusel muudab
      startClock();
    }

    function changeClockColor(){
      console.log("Muudan värvi");
      const r = Math.round(Math.random()*255);
      const g = Math.round(Math.random()*255);
      const b = Math.round(Math.random()*255);

      //document.body.style.changeClockColor = 'rgb('+r+','+g+','+b+')';
      document.body.style.ClockColor = `rgb(${r},${g},${b})`;
      //clockContainer.style.changeClockColor = 'rgb('+r+','+g+','+b+')';
    }
  };
