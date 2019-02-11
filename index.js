
let clock = document.querySelector('#clock');

setInterval (updateTime, 1000);

function updateTime() {
    const date = new Date();
    clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getUTCSeconds();
}

updateTime();