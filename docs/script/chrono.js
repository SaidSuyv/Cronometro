function chrono_init() {
  TITLE_FRAME.innerText = CHRONO.name;

  CHRONO.main.classList.add("show");
}

function onChronoInput(ev) {
  let { target } = ev;

  if (target.value.length == 0) {
    target.value = "";
    return;
  }

  if (target.value.length > 2) target.value = target.value[0] + target.value[1];

  if (target.id != "hour" && parseInt(target.value) > 59) target.value = "59";
}

function checkChronoTime(hour, min, sec) {
  if (parseInt(sec.value) == 0) {
    if (parseInt(min.value) > 0) {
      sec.value = 59;
      min.value = parseInt(min.value) - 1;
    } else if (parseInt(hour.value) > 0) {
      sec.value = min.value = 59;
      hour.value = parseInt(hour.value) - 1;
    }
  } else sec.value = parseInt(sec.value) - 1;
}

function onChronoStop(buttonElement) {
  if (CHRONO.interval != null) {
    clearInterval(CHRONO.interval);
    CHRONO.interval = null;
  }

  CHRONO.actions.forEach((button) => {
    if (button.className.includes("play")) button.disabled = false;
    else button.disabled = true;
  });

  CHRONO.inputs.forEach((input) => {
    input.disabled = false;
    input.value = "0";
  });
}

function onChronoPlay(buttonElement) {
  let ret = 0;

  CHRONO.inputs.forEach((input) => {
    if (input.value.length == 0 || input.value == "0") ret++;
  });

  if (ret == 3) return;

  CHRONO.actions.forEach((button) => {
    if (button != buttonElement) button.disabled = false;
    else button.disabled = true;
  });

  CHRONO.inputs.forEach((input) => {
    if (input.value.length == 0) input.value = "0";
    input.disabled = true;
  });

  if (CHRONO.interval == null) {
    CHRONO.interval = setInterval(() => {
      let hour = CHRONO.inputs[0];
      let min = CHRONO.inputs[1];
      let sec = CHRONO.inputs[2];

      if (hour.value == "0" && min.value == "0" && sec.value == "0") {
        onChronoStop();
        return;
      }

      checkChronoTime(hour, min, sec);
    }, 1000);
  } else {
    CHRONO.interval = setInterval(() => {
      let hour = CHRONO.inputs[0];
      let min = CHRONO.inputs[1];
      let sec = CHRONO.inputs[2];

      if (hour.value == "0" && min.value == "0" && sec.value == "0") {
        onChronoStop();
        return;
      }

      checkChronoTime(hour, min, sec);
    }, 1000);
  }
}

function onChronoPause(buttonElement) {
  if (CHRONO.interval != null) {
    clearInterval(CHRONO.interval);
  }

  CHRONO.actions.forEach((button) => {
    if (button.className.includes("play")) button.disabled = false;
    else button.disabled = true;
  });

  CHRONO.inputs.forEach((input) => (input.disabled = false));
}
