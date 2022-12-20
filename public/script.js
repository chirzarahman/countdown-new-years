const currentYear = new Date().getFullYear();
const countDate = new Date(`January 01 ${currentYear + 1} 00:00:00`).getTime();
document.getElementById('newYear').innerText = currentYear + 1;
document.getElementById('newYear2').innerText = currentYear + 1;

function countdown() {
    const now = new Date();
    gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day));
    const h = Math.floor((gap % (day) / (hour)));
    const m = Math.floor((gap % (hour) / (minute)));
    const s = Math.floor((gap % (minute) / (second)));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

    if (gap < 0) {
        setTimeout(document.getElementById("sup").style.display = "block", 5000);
        setTimeout(document.getElementById("main").style.display = "none", 5000);
    }
}

const countdownInterval = setInterval(countdown, 1000);