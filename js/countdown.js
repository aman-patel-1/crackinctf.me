// Countdown Timer
const countdown = () => {
    const countDate = new Date("2024-12-15T10:00:00").getTime(); // Set to event start date
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.querySelector(".countdown").innerText = `${d}d ${h}h ${m}m ${s}s`;

    if (gap < 0) {
        document.querySelector(".countdown").innerText = "The event has started!";
    }
};
setInterval(countdown, 1000);