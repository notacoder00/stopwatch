var isStop = true;
var ms = 0;
var s = 0;
var min = 0;
var hr = 0;
function start(){
    console.log("starting")
    if(isStop== true){
        isStop=false;
        timer();
    }

}
function timer(){
    if(isStop==false){
        ms=parseInt(ms);
        s=parseInt(s);
        min=parseInt(min);
        hr=parseInt(hr);
        ms++;
        if(ms===99){
            ms=0;
            s++;
        }
        if(s===59){
            s=0;
            min++;
        }
        if(min===59){
            min=0;
            hr++;
        }
        if(ms<10){
            ms="0"+ms;
        }
        if(s<10){
            s="0" +s;
        }
        if(min<10){
            min="0" +min;
        }

        if(hr<10){
            hr="0" +hr;
        }




        // console.log(s);
        stopwatch.innerHTML = hr +" : "+min+" : "+ s + " : "+ ms;
        setTimeout("timer()",10);
    }
}
function stop(){
    isStop=true; 
}
function reset(){
    ms=0;
    s=0;
    min=0
    hr=0;
    stopwatch.innerHTML="00 : 00 : 00 : 00";
}