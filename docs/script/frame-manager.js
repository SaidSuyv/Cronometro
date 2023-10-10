var nCurrentFrame = 0;

function set_screen(sScreen) {
  reset_frames();
  sScreen += "_init()";
  eval(sScreen);
}

function reset_frames() {
  FRAMES.forEach((frame) => {
    frame.main.classList.remove("show");
    frame.onEnd();
  });
}

function onPrevFrame() {
  if (nCurrentFrame == 0) nCurrentFrame = FRAMES.length - 1;
  else nCurrentFrame -= 1;

  set_screen(FRAMES[nCurrentFrame].caller);
}

function onNextFrame() {
  if (nCurrentFrame == FRAMES.length - 1) nCurrentFrame = 0;
  else nCurrentFrame += 1;

  set_screen(FRAMES[nCurrentFrame].caller);
}

set_screen(FRAMES[nCurrentFrame].caller);
