const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDays = document.getElementById('timer-days');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        return { timeRemaining, days, hours, minutes, seconds };
    };

    const getZero = (num) => {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    };

    function updateClock() {
        let getTime = getTimeRemaining();
        if (getTime.seconds > 0) {
            timerDays.textContent = getTime.days;
            timerHours.textContent = getZero(getTime.hours);
            timerMinutes.textContent = getZero(getTime.minutes);
            timerSeconds.textContent = getZero(getTime.seconds);
            if (getTime.timeRemaining < 0) {
                clearInterval(iterval);
            }
        }
    };
    updateClock();
    let iterval = setInterval(updateClock, 1000);
};

export default timer;