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


  
    var author = document.querySelector(".author");
    var hr_hand = document.querySelector(".hr-hand");
    var min_hand = document.querySelector(".min-hand");
    var hr_sec = document.querySelector(".sec-hand");

      author.onclick = function() {
      var red = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);

      this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    };




    hr_hand.onclick = function() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  };

    min_hand.onclick = function() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  };

  hr_sec.onclick = function() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  };






};
