let starttime,updatetime,diff,timeinterval;
let running=false;
const display=document.getElementById('display');
const startstopbtn=document.getElementById('startstopbtn');
const resetbtn=document.getElementById('resetbtn');
const lapbtn=document.getElementById('lapbtn');
const laplist=document.getElementById('laplist');
console.log("Script loaded successfully.");

function startstop()
{
    if(!running)
        {
            console.log("Starting timer.");
            starttime=new Date().getTime();
            timeinterval=setInterval(updatetimedisplay,1);
            startstopbtn.textContent='Stop';
            running=true;
        }
        else{
            console.log("Stopping timer.");
            clearInterval(timeinterval);
            startstopbtn.textContent='Start';
            running=false;
        }
}
function reset()
{
    console.log("Resetting timer.");
    clearInterval(timeinterval);
    running=false;
    startstopbtn.textContent='Start';
    display.textContent='00:00:00:000';
    laplist.innerHTML='';
}
function lap()
{
    console.log("Recording lap time.");
    const laptime =document.createElement('li');
    laptime.textContent=display.textContent;
    laplist.appendChild(laptime);
}
function updatetimedisplay()
{
    const currenttime =new Date().getTime();
    diff=currenttime - starttime;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((diff % 1000));

display.textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + "." +
        (milliseconds < 100 ? "0" : "") + (milliseconds < 10 ? "0" : "") + milliseconds;
}
startstopbtn.addEventListener('click',startstop);
resetbtn.addEventListener('click',reset);
lapbtn.addEventListener('click',lap);
console.log("Event listeners added.");