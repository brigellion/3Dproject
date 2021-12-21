'use strict';

const time = document.getElementById('time');
const hello = document.getElementById('hello');
const today = document.getElementById('today');
const remain = document.getElementById('remain');



const calendar = () => {
    const showDay = (day) => {
        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[day];
    };
    const getValues = () => {
        let timeStop = new Date('1 january 2022').getTime();
        let timeNow = new Date().getTime();
        let timeRemaining = (timeStop - timeNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let today = showDay(new Date().getDay());

        const date = new Date();
        let hour = date.getHours();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const time = new Intl.DateTimeFormat('en-US', options).format(date);

        return { days, today, time, hour };
    };
    const updateClock = () => {
        let getTime = getValues();
        switch (true) {
            case getTime.hour < 3 || getTime.hour >= 23:
                hello.textContent = 'Доброй ночи';
                break;
            case getTime.hour <= 11:
                hello.textContent = 'Доброе утро';
                break;
            case getTime.hour < 17:
                hello.textContent = 'Добрый день';
                break;
            case getTime.hour <= 22:
                hello.textContent = 'Добрый вечер';
                break;
        }
        time.textContent = getTime.time;
        today.textContent = `Сегодня: ${getTime.today}`;
        remain.textContent = `До нового года осталось ${getTime.days} дней`;
    };
    let interval = setInterval(updateClock, 1000);
};


calendar();