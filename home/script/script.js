//----- RESOURCES -----

const day_text = document.querySelector('.day-counter');
const month_text = document.querySelector('.month-counter');
const year_text = document.querySelector('.year-counter');

const hour_text = document.querySelector('.hour-counter');
const minute_text = document.querySelector('.minute-counter');
const second_text = document.querySelector('.second-counter');

let day, month, year, hour, minute, second;

let new_days, new_months, new_years, new_hours, new_minutes, new_seconds;

const less_than_10_verifier = (verification) => {

    switch (true) {
        case verification < 10:
            return '0' + verification;
        default:
            return verification;
    }
}

let seconds_changer = setInterval(() => {

    let complete_date = new Date();
    day = complete_date.getDate();
    month = complete_date.getMonth() + 1;
    year = complete_date.getFullYear();

    hour = complete_date.getHours();
    minute = complete_date.getMinutes();
    second = complete_date.getSeconds();

    day_text.innerHTML = less_than_10_verifier(day);
    month_text.innerHTML = less_than_10_verifier(month);
    year_text.innerHTML = year;

    second_text.innerHTML = less_than_10_verifier(second);
    minute_text.innerHTML = less_than_10_verifier(minute);
    hour_text.innerHTML = less_than_10_verifier(hour);

}, 1000);