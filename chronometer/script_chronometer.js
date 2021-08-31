//-----  RESOURCES -----

//-- chronometer itself --

const start_button_container = document.querySelector('.start-button');
const pause_button_container = document.querySelector('.pause-button');

const hour_text = document.querySelector('.hour-counter');
const minute_text = document.querySelector('.minute-counter');
const second_text = document.querySelector('.second-counter');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

//-- register method --

let order = 0;

//----- CHRONOMETER FUNCIONTS -----

const limits = ()=>{

  switch (true) {
    case seconds > 59 && minutes < 60:
      seconds = 0;
      minutes++;
      return [seconds, minutes, hours];
    case seconds > 59 && minutes > 59:
      seconds = 0;
      minutes = 0;
      hours++;
      return [seconds, minutes, hours];
    default:
      return [seconds, minutes, hours];
  }
}

const verify_10 = (value)=>{
  if(value < 10){
    value = '0' + value;
    return value;
  }else{
    return value;
  }
}

const show_info = (new_seconds, new_minutes, new_hours)=>{
  second_text.innerHTML = new_seconds;
  minute_text.innerHTML = new_minutes;
  hour_text.innerHTML = new_hours;
}

const start = ()=>{
  timer = setInterval(()=>{
    seconds++;

    let time_arr = limits();

    show_info(verify_10(seconds), verify_10(minutes), verify_10(hours));
  }, 1000);
}

const pause = ()=>{
  clearInterval(timer);
}

//----- REGISTER FUNCTIONS -----

const add_to_father_register = ()=>{
  const new_register = createRegister();

  document.querySelector('.register-content').appendChild(new_register);
}

const createRegister = ()=>{

    //-- elements containers --
  const full_container = document.createElement('div').classList.add('son-register');
  const order_container = document.createElement('div').classList.add('order-container');
  const time_container = document.createElement('div').classList.add('time-container');
  const erase_container = document.createElement('div').classList.add('erase-container');

  //-- elements --
  const order_text = document.createElement('p').classList.add('order-text');
  const time_text = document.createElement('p').classList.add('time-text');
  /*const erase_button = document.createElement('button').classList.add('erase-button');
  erase_button.setAttribute('onclick', 'erases()');*/
  const sign_erase = document.createElement('span');

  order = order + 1;
  order_text.innerHTML = order;
  time_text.innerHTML = `${hours} : ${minutes} : ${seconds}`;

  //erase_button.appendChild(sign_erase);

  order_container.appendChild(order_text);
  time_container.appendChild(time_text);
  //erase_container.appendChild(erase_button);

  full_container.appendChild(order_container);
  full_container.appendChild(time_container);
  full_container.appendChild(erase_container);

  return full_container;
}
