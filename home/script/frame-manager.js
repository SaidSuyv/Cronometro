function set_screen(sScreen)
{
    reset_frames();
    sScreen += "_init()";
    eval(sScreen);
}

function reset_frames()
{
    FRAMES.forEach( frame => {
        frame.main.classList.remove("show");
        frame.interval = null;
    });
}

set_screen("chrono");