const start_button_container = document.querySelector('.start-button');
const pause_button_container = document.querySelector('.pause-button');

const hour_text = document.querySelector('.hour-counter');
const minute_text = document.querySelector('.minute-counter');
const second_text = document.querySelector('.second-counter');

const register_container = document.querySelector('.register-content');

const prueba = document.querySelector('.main-container');

let alto_prueba = window.innerHeight - 60;

let start, hour, minute, second;

let register_order = 0;

hour = 0;
minute = 0;
second = 0;

let register_group = [];

const less_than_10_numbers = (value)=>{
    switch(true){
        case value < 10:
            return '0' + value;
        default:
            return value;
    }
}

const seconds_minutes_hours_logic = (current_second, current_minute)=>{
    switch(true){
        case current_second < 59:
            second++;
            break;
        case current_second == 59 && current_minute < 59:
            minute++;
            second = 0;
            break;
        case current_second == 59 && current_minute == 59:
            hour++;
            minute = 0;
            second = 0;
            break;
    }
}

const start_chronometer = ()=>{
    start_button_container.style.display = 'none';
    pause_button_container.style.display = 'block';

    start = setInterval(()=>{
        seconds_minutes_hours_logic(second, minute);

        second_text.innerHTML = less_than_10_numbers(second);
        minute_text.innerHTML = less_than_10_numbers(minute);
        hour_text.innerHTML = less_than_10_numbers(hour);
    }, 1000);
}

const pause_chronometer = ()=>{
    start_button_container.style.display = 'block';
    pause_button_container.style.display = 'none';

    clearInterval(start);
}

const stop_chronometer = ()=>{
    start_button_container.style.display = 'block';
    pause_button_container.style.display = 'none';

    clearInterval(start);

    second = 0;
    minute = 0;
    hour = 0;

    second_text.innerHTML = less_than_10_numbers(second);
    minute_text.innerHTML = less_than_10_numbers(minute);
    hour_text.innerHTML = less_than_10_numbers(hour);

    while(register_container.hasChildNodes()){
        register_container.removeChild(register_container.children[0]);
    }

    prueba.style.height = '100vh';
    register_order = 0;
}

const add_register_chronometer = ()=>{

    register_order++;

    const current_register_container = document.createElement('div');
    const order_number_container = document.createElement('div');
    const current_time_container = document.createElement('div');
    const order_number_text = document.createElement('p');
    const current_time_text = document.createElement('p');

    //----------------------------------------------------------------------
    
    current_time_container.classList.add('time-registered-container');
    order_number_container.classList.add('order-number-registered-container');

    current_register_container.classList.add('current-registered-container');

    //----------------------------------------------------------------------

    current_time_container.appendChild(current_time_text);
    order_number_container.appendChild(order_number_text);

    current_register_container.appendChild(order_number_container);
    current_register_container.appendChild(current_time_container);

    register_container.appendChild(current_register_container);

    //----------------------------------------------------------------------

    order_number_text.innerHTML = register_order;
    current_time_text.innerHTML = `${less_than_10_numbers(hour)} : ${less_than_10_numbers(minute)} : ${less_than_10_numbers(second)}`;

    switch(true){
        case window.innerWidth < 800:
            if(register_container.children.length >= 6) prueba.style.height = '100%';
            break;
        case window.innerWidth > 800:
            if(register_container.children.length >= 5) prueba.style.height = '100%';
            break;
    }
}