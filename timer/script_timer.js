const inps = document.getElementsByName('time-setter');

const hour_input = document.querySelector('.hour-setter');
const minute_input = document.querySelector('.minute-setter');
const second_input = document.querySelector('.second-setter');

const start_button_container = document.querySelector('.start-button');
const pause_button_container = document.querySelector('.pause-button');

let start_timer_interval;

const hour = hour_input.value;
const minute = minute_input.value;
const second = second_input.value;

const less_than_10_value = (value) => {

    switch (true) {
        case value < 10 && value > 0:
            return '0' + value;
        case value == 0:
            return '00';
        case value == null:
            return '';
        default:
            return value;
    }
}

const logic_All = (current_second, current_minute, current_hour) =>{

    let arr = [];

    switch(true){
        case
            current_second > 0 && current_minute >= 0:

            current_second--;

            arr.push(current_second);
            arr.push(current_minute);
            arr.push(current_hour);

            return arr;

        case 
            current_second == 0 && current_minute > 0:

            current_minute--;
            current_second = 59;

            arr.push(current_second);
            arr.push(current_minute);
            arr.push(current_hour);

            return arr;

        case 
            current_second == 0 && current_minute == 0 && current_hour > 0:

            current_hour--;
            current_minute = 59;
            current_second = 59;

            arr.push(current_second);
            arr.push(current_minute);
            arr.push(current_hour);

            return arr;

        case current_second == 0 && current_minute == 0 && current_hour == 0:

            clearInterval(start_timer_interval);

            start_button_container.style.display = 'block';
            pause_button_container.style.display = 'none';
        
            second_input.disabled = false;
            minute_input.disabled = false;
            hour_input.disabled = false;

            arr.push(null);
            arr.push(null);
            arr.push(null);

            return arr;

    }
}

const start_timer = () => {

    start_button_container.style.display = 'none';
    pause_button_container.style.display = 'block';

    second_input.disabled = true;
    minute_input.disabled = true;
    hour_input.disabled = true;

    start_timer_interval = setInterval(()=>{

        let new_second = second_input.value;
        let new_minute = minute_input.value;
        let new_hour = hour_input.value;

        new_second = parseInt(new_second);
        new_minute = parseInt(new_minute);
        new_hour = parseInt(new_hour);

        switch(true){
            case isNaN(new_second) && isNaN(new_minute) && isNaN(new_hour):
                new_second = 0;
                new_minute = 0;
                new_hour = 0;
                break;
            case isNaN(new_second) && isNaN(new_minute):
                new_second = 0;
                new_minute = 0;
                break;
            case isNaN(new_minute) && isNaN(new_hour):
                new_hour = 0;
                new_minute = 0;
                break;
            case isNaN(new_hour) && isNaN(new_second):
                new_hour = 0;
                new_second = 0;
                break;
            case isNaN(new_second):
                new_second = 0;
                break;
            case isNaN(new_minute):
                new_minute = 0;
                break;
            case isNaN(new_hour):
                new_hour = 0;
                break;
        }

        let new_arr = logic_All(new_second, new_minute, new_hour);

        new_second = less_than_10_value(new_arr[0]);
        new_minute = less_than_10_value(new_arr[1]);
        new_hour = less_than_10_value(new_arr[2]);

        second_input.value = new_second;
        minute_input.value = new_minute;
        hour_input.value = new_hour;
    }, 1000)
}

const pause_timer = () => {
    clearInterval(start_timer_interval);

    start_button_container.style.display = 'block';
    pause_button_container.style.display = 'none';

    second_input.disabled = false;
    minute_input.disabled = false;
    hour_input.disabled = false;

    let arr = [second_input.value, minute_input.value, hour_input.value];

    switch(true){
        case arr[0] == '00':
            second_input.value = '';
        case arr[1] == '00':
            minute_input.value = '';
        case arr[2] == '00':
            hour_input.value = '';
            break;
    }
}

const stop_timer = ()=>{
    clearInterval(start_timer_interval);

    start_button_container.style.display = 'block';
    pause_button_container.style.display = 'none';

    second_input.disabled = false;
    minute_input.disabled = false;
    hour_input.disabled = false;

    second_input.value = '';
    minute_input.value = '';
    hour_input.value = '';
}