window.onload = function() {
    startTime();
    setInterval(startTime, 1000);
};

let alarmInterval;

function startTime() {
    let today = new Date();

    let dayOfWeek = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let daysOfWeek = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];
    let monthsOfYear = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"];
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('date').innerHTML =
        "Täna on " + daysOfWeek[dayOfWeek - 1] + ", " + date + ". " + monthsOfYear[month] + " " + year + ".";
    document.getElementById('time').innerHTML = "Kell on " + hour + ":" + minute + ":" + second + ".";

}
function checkTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

function setAlarm() {
    let alarmHours = parseInt(prompt("Sisesta äratuse tund: "));
    let alarmMinutes = parseInt(prompt("Sisesta äratuse minut: "));
    let now = new Date();
    let alarmDate;
    if(!isNaN(alarmHours) && !isNaN(alarmMinutes)){
        if(alarmHours >= 0 || alarmMinutes >= 0) {
            if(now.getHours() > alarmHours || (now.getHours() == alarmHours && now.getMinutes() >= alarmMinutes)) {
                alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, alarmHours, alarmMinutes);
            } else {
                alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes);
            }
            document.getElementById("alarmNotice").innerText = "Äratus on kell " + checkTime(alarmHours) + ":" + checkTime(alarmMinutes);
            alarmInterval = setInterval(function () {
                let distance = alarmDate.getTime() - new Date().getTime();
                console.log(distance);
                if(distance <= 0){
                    clearInterval(alarmInterval);
                    alarmInterval = 0;
                    window.alert("Äratus!");
                    document.getElementById("alarmNotice").innerText = "";
                }
            }, 1000);
        }
    }

}

function setTimer() {
    let timer = parseFloat(prompt("Sisesta aeg minutites: "));
    let countdownTime = new Date().getTime() + (timer * 60000);
    if(timer > 0){
        let timerInterval = setInterval(function () {
            let now = new Date().getTime();
            let distance = countdownTime - now;
            console.log(distance);
            let hours = checkTime(Math.floor(distance / (1000 * 60 * 60)));
            let minutes = checkTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            let seconds = checkTime(Math.floor((distance % (1000 * 60)) / 1000));

            if(seconds >= 0){
                if (alarmInterval > 0){
                    document.getElementById("timerNotice").innerText = " | " + hours + " : " + minutes + " : " + seconds;
                } else {
                    document.getElementById("timerNotice").innerText = hours + " : " + minutes + " : " + seconds;
                }
            } else {
                clearInterval(timerInterval);
                window.alert("Aeg on läbi!");
                document.getElementById("timerNotice").innerText = "";
            }
        }, 1000);
    }
}

