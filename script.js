window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //Timer

    let deadline = '2021-02-23';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            // ___________________________________________
            // if need hours without days 
            hours = Math.floor((t / (1000 * 60 * 60)));
        // ___________________________________________
        //If need with days 
        // hours = Math.floor((t/1000/60/60) % 24),
        // days = Math.floor((t/(1000*60*60*24)));

        if (t <= 0) {
            seconds = '0';
            minutes = '0';
            hours = '0';
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);


            for (let key in t) {
                if (t[key] < 10) {
                    t[key] = '0' + t[key];
                }
            }

            hours.textContent = `${t.hours} h`;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }

    setClock('timer', deadline);
});