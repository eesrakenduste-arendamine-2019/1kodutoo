/* jshint esversion: 6 */

let clockElement = document.querySelector('#clock');
let dateElement = document.querySelector('#date');

setInterval (updateTime, 1000);

function updateTime() {
    clockElement.innerHTML = moment().format('HH:mm:ss');
    dateElement.innerHTML = moment().format('dddd, DD.MM.YYYY');
}

document.getElementById('show-time').addEventListener('change', function() {
    if (this.checked) {
        clockElement.classList.remove('hidden');
    } else {
        clockElement.classList.add('hidden');
    }
});

document.getElementById('show-date').addEventListener('change', function() {
    if (this.checked) {
        dateElement.classList.remove('hidden');
    } else {
        dateElement.classList.add('hidden');
    }
});

document.getElementById('dark-theme').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

document.getElementById('time-size').addEventListener('change', function() {
    let value = this.value;
    if (value == 0) {
        clockElement.classList.remove('clock-medium');
        clockElement.classList.remove('clock-large');
    } else if (value == 1) {
        clockElement.classList.add('clock-medium');
        clockElement.classList.remove('clock-large');
    } else {
        clockElement.classList.remove('clock-medium');
        clockElement.classList.add('clock-large');
    }
});

updateTime();