const TIMER = {
  name: "Timer",
  caller: "timer",
  interval: null,
  onEnd: () => {
    if (TIMER.interval != null) {
      clearInterval(TIMER.interval);
      TIMER.interval = null;
    }

    TIMER.date.innerText = "Day-Month-Year";
    TIMER.time.innerText = "hour:minute:second";
  },
  main: document.querySelector("section#timer"),
  date: document.querySelector("section#timer p.date"),
  time: document.querySelector("section#timer p.time"),
};

const CHRONO = {
  name: "Chronometer",
  caller: "chrono",
  interval: null,
  onEnd: () => {
    if (CHRONO.interval != null) {
      clearInterval(CHRONO.interval);
      CHRONO.interval = null;
    }

    CHRONO.inputs.forEach((input) => {
      input.disabled = false;
      input.value = "0";
    });

    CHRONO.actions.forEach((button) => {
      if (button.className.includes("play")) button.disabled = false;
      else button.disabled = true;
    });
  },
  main: document.querySelector("section#chrono"),
  inputs: document.querySelectorAll("section#chrono div.inputs > input"),
  actions: document.querySelectorAll("section#chrono div.actions > button"),
};

const FRAMES = [TIMER, CHRONO];

const TITLE_FRAME = document.querySelector("p#current_frame");
