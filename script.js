let mins = document.getElementById('min');
let stopbtn = document.getElementById("second");
let mili = document.getElementById("milisecond");
let hour = document.getElementById("hour");

let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let timer = false;

function start(){
    timer = true;
    stopwatch();
    
}
function stop(){
    timer =false; 
    
}
function reset(){
    timer =false;
     hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;

}

setInterval(stopwatch,10);
function stopwatch(){
    if(timer == true){
        milisec=milisec+1;
    }
    
    if(milisec == 100){
        milisec = 0 ;
        sec =sec + 1;
        
    }
    if(sec == 60){
        sec =0;
        min =min+1;
    }
    if(min == 60){
        sec =0;
        hr =hr+1;
    }

    
    mili.innerHTML = (milisec<10) ? `0${milisec}`: milisec;
    stopbtn.innerHTML = (sec<10) ? `0${sec}`: sec;
     mins.innerHTML = (min<10) ? `0${min}`: min;
     hour.innerHTML = (hr<10) ? `0${hr}`: hr;
}