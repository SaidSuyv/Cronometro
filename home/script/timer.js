function timer_init()
{
    
    TITLE_FRAME.innerText = TIMER.name;
    
    if(TIMER.interval == null)
    {
        TIMER.interval = setInterval(()=>{
            
            let date = new Date();
            let locale = navigator.languages[0];
            
            TIMER.date.innerText = date.toLocaleString(locale,{
                weekday: "long",
                day: "numeric",
                month: "short",
                year: "numeric"
            });
            
            TIMER.time.innerText = date.toLocaleTimeString();//.substring(11,19);
            
        },100);
    }
}

timer_init();