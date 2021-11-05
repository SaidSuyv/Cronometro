[document.querySelector('.left-btn'),document.querySelector('.right-btn')].forEach((e) => {
  e.addEventListener('click', (evt)=>{
    switch (evt.target.parentElement.className) {
      case 'left-btn':
        goLeft();
        break;
      case 'right-btn':
        goRight();
        break;
    }
  });
});

//---------------------------------------------------------

const elements = document.querySelectorAll('.timer-elements');
let currentElement = 0;
let timerControl;

const teller = document.querySelector('.user-interface .current-location span');

const goLeft = ()=>{

  elements[currentElement].classList.toggle('disabled');

  if((currentElement - 1) < 0){currentElement = elements.length - 1;}
  else{currentElement--;}

  elements[currentElement].classList.toggle('disabled');

  teller.innerHTML = elements[currentElement].id;

}

const goRight = ()=>{

  elements[currentElement].classList.toggle('disabled');

  if((currentElement + 1) == elements.length){currentElement = 0;}
  else{currentElement++;}

  elements[currentElement].classList.toggle('disabled');

  teller.innerHTML = elements[currentElement].id;

}
