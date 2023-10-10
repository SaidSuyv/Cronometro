const TIMER = {
    name: "Timer",
    interval: null,
    main: document.querySelector("section#timer"),
    date: document.querySelector("section#timer p.date"),
    time: document.querySelector("section#timer p.time")
}

const CHRONO = {
    name: "Chronometer",
    interval: null,
    main: document.querySelector("section#chrono"),
    inputs: document.querySelectorAll("section#chrono div.inputs > input"),
}

const FRAMES = [TIMER,CHRONO];

const TITLE_FRAME = document.querySelector("p#current_frame");