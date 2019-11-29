function getDate() {
    var now = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    var day = weekday[now.getDay()];
    var month = months[now.getMonth()];
    var dayOfMonth = now.getDate();

    var elem = document.getElementById('date');

    elem.innerHTML = day + ', ' + month + ' ' + dayOfMonth;

    var hours = now.getHours();
    var minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var elem = document.getElementById('time');

    elem.innerHTML = '<b>' + hours + '</b>:' + minutes;
}

window.onload = function() {
    setInterval(getDate, 200);
}
