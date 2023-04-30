let timeanddate = document.getElementById("timeAndDate");
let time = new Date();
let minutes = time.getMinutes();
let hours = time.getHours();
let t="AM";
if (minutes < 10) {minutes = "0" + minutes}
if (hours > 12) {hours = hours - 12; t="PM"};
setInterval(function() {
    timeanddate.innerText = `${hours}:${minutes} ${t}`;
}, 1000);