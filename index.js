/* jshint esversion: 6 */

// Initialization

let clockElement = document.getElementById('clock');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let dateElement = document.getElementById('date');
let notificationElement = document.getElementById('notification');

let inputShowDate = document.getElementById('show-date');
let inputShowColors = document.getElementById('show-colors');
let inputDarkTheme = document.getElementById('dark-theme');
let inputTimeSize = document.getElementById('time-size');

let inputHoursColor = document.getElementById('hours-color');
let inputMinutesColor = document.getElementById('minutes-color');
let inputSecondsColor = document.getElementById('seconds-color');

let resetSettingsButton = document.getElementById('reset');

inputShowColors.addEventListener('change', function() {
    onInputShowColorsChange();
});
inputShowDate.addEventListener('change', function() {
    onInputShowDateChange();
    autosave();
});
inputDarkTheme.addEventListener('change', function() {
    onInputDarkThemeChange();
    autosave();
});
inputTimeSize.addEventListener('input', function() {
    onInputTimeSizeChange();
    autosave();
});
inputHoursColor.addEventListener('change', function() {
    onInputColorChange(this.value, hoursElement);
    autosave();
});
inputMinutesColor.addEventListener('change', function() {
    onInputColorChange(this.value, minutesElement);
    autosave();
});
inputSecondsColor.addEventListener('change', function() {
    onInputColorChange(this.value, secondsElement);
    autosave();
});
resetSettingsButton.addEventListener('click', function() {
    localStorage.removeItem('settings');
    location.reload();
});

let autosaveTimeout = null;
let notificationTimeout = null;

window.onload = function() {

    loadSettings();
    updateTime();
    setInterval(updateTime, 1000);
    initColorPickers();

}

function initColorPickers() {
    let colorPickers = document.querySelectorAll('input[type="color"]');
    for (let i = 0; i < colorPickers.length; i++) {
        let element = colorPickers[i];
        element.addEventListener('change', function() {
            element.parentElement.style.backgroundColor = element.value;
        });
        element.parentElement.style.backgroundColor = element.value;
    }
}

// Storage management

function loadSettings() {
    let data = localStorage.getItem('settings');
    let settings = {};
    if (data) {
        settings = JSON.parse(data);
        showNotification('Settings loaded successfully.');
    } else {
        // default settings
        settings = {
            showDate: true,
            darkTheme: false,
            timeSize: 3,
            hoursColor: '#000000',
            minutesColor: '#000000',
            secondsColor: '#000000'
        }
    }
    inputShowDate.checked = settings.showDate;
    inputDarkTheme.checked = settings.darkTheme;
    inputTimeSize.value = settings.timeSize;
    inputHoursColor.value = settings.hoursColor;
    inputMinutesColor.value = settings.minutesColor;
    inputSecondsColor.value = settings.secondsColor;
    onInputShowDateChange();
    onInputDarkThemeChange();
    onInputTimeSizeChange();
    onInputColorChange(settings.hoursColor, hoursElement);
    onInputColorChange(settings.minutesColor, minutesElement);
    onInputColorChange(settings.secondsColor, secondsElement);
}

function autosave() {
    if (autosaveTimeout != null) {
        clearTimeout(autosaveTimeout);
    } 
    autosaveTimeout = setTimeout(function() {
        saveSettings();
        autosaveTimeout = null;
    }, 2000);
}

function saveSettings() {
    let settings = {
        showDate: inputShowDate.checked,
        darkTheme: inputDarkTheme.checked,
        timeSize: inputTimeSize.value,
        hoursColor: inputHoursColor.value,
        minutesColor: inputMinutesColor.value,
        secondsColor: inputSecondsColor.value
    };
    localStorage.setItem('settings', JSON.stringify(settings));
    showNotification('Settings saved successfully.')
}

function updateTime() {
    let date = new Date();
    // clockElement.innerHTML = date.toLocaleTimeString('et-EE');
    hoursElement.innerText = ('0' + date.getHours()).slice(-2);
    minutesElement.innerText = ('0' + date.getMinutes()).slice(-2);
    secondsElement.innerText = ('0' + date.getSeconds()).slice(-2);
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerHTML = date.toLocaleDateString('et-EE', options);
}

// Notification

function showNotification(message) {
    notificationElement.querySelector('p').innerHTML = message;
    notificationElement.classList.remove('hidden');
    if (notificationTimeout != null) {
        clearTimeout(notificationTimeout);
    }
    notificationTimeout = setTimeout(function() {
        notificationElement.classList.add('hidden');
        notificationTimeout = null;
    }, 2000);
}

// Event handlers
function onInputShowColorsChange() {
    if (inputShowColors.checked) {
        showNotification('Color edit pills enabled. Click on the color pills to change the color.')
        inputHoursColor.parentNode.classList.remove('hidden');
        inputMinutesColor.parentNode.classList.remove('hidden');
        inputSecondsColor.parentNode.classList.remove('hidden');
    } else {
        inputHoursColor.parentNode.classList.add('hidden');
        inputMinutesColor.parentNode.classList.add('hidden');
        inputSecondsColor.parentNode.classList.add('hidden');
    }
}

function onInputShowDateChange() {
    if (inputShowDate.checked) {
        dateElement.classList.remove('hidden');
    } else {
        dateElement.classList.add('hidden');
    }
}

function onInputDarkThemeChange() {
    if (inputDarkTheme.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function onInputTimeSizeChange() {
    let value = inputTimeSize.value;
    clockElement.style.fontSize = value + 'em';
}

function onInputColorChange(color, timeElement) {
    timeElement.style.color = color;
}