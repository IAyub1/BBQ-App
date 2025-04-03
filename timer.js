document.addEventListener("DOMContentLoaded", () => {
    const timerValue = localStorage.getItem("timerValue");
    if (!timerValue) {
        document.getElementById("countdown").innerHTML = "No timer set.";
        return;
    }

    const countdownElement = document.getElementById("countdown");
    const alarmSound = document.getElementById("alarm-sound");
    let time = timerValue.split(":");
    let minutes = parseInt(time[0]);
    let seconds = parseInt(time[1]);

    function updateCountdown() {
        if (minutes === 0 && seconds === 0) {
            countdownElement.innerHTML = "Time's up!";
            alarmSound.play();
            return;
        }

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        countdownElement.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
});