start.addEventListener("click", start_click);
clear.addEventListener("click", stop_click);


var globalMilisecs = 0, localMilisecs = 0, timerId;
var startButton;
startButton = document.getElementById('start');


/**
 * Padding String by Mask
 */
function str_pad($number, $mask){
    return $mask.substring(0, $mask.length - $number.length) + $number;
}

/**
 * Start\Pause globalMilisecs
 */
function start_click() {
    var classStart = document.getElementsByClassName('start');
    if (startButton.className == 'start btn btn-primary') {
        startButton.innerHTML = 'pause';
        startButton.classList = 'pause btn btn-warning';
        console.log(startButton);

        timerId = setInterval(function () {
            globalMilisecs++; //global
            localMilisecs++; //localMilisecs
            mil_sec = globalMilisecs;

            if (localMilisecs > 999) {
                if (globalMilisecs < 100) {
                    milsec.innerHTML = '0' + globalMilisecs;
                } else {
                    milsec.innerHTML = globalMilisecs;
                }
            }


            // if(globalMilisecs == 1000){
            //     sec++;
            //     if(sec < 10){
            //         sec = "0"+sec;
            //     } if (sec == 60) {
            //         sec = '00';
            //     }
            //
            // }
            //
            // if(sec == 60){
            //     min++;
            //     if(min < 10){
            //         min = "0"+min;
            //     } if (min == 60) {
            //         min = '00';
            //     }
            //
            // }
            //
            // if(min == 60){
            //     h++;
            //     if(h < 10){
            //         h = "0"+h;
            //     } if (h == 24) {
            //         h = '00';
            //     }
            //
            // }

            // timer.innerHTML = h+':'+min+':'+sec;

            sec = Math.floor(globalMilisecs / 1000) % 60;
            if (sec < 10) {
                sec = "0" + sec;
            }

            min = Math.floor(globalMilisecs / 60000) % 60;
            if (min < 10) {
                min = "0" + min;
            }

            h = Math.floor(globalMilisecs / 3600000) % 24;
            if (h < 10) {
                h = "0" + h;
            }
            timer.innerHTML = h + ':' + min + ':' + sec;

        }, 1);
    } else {
        startButton.innerHTML = 'start';
        clearInterval(timerId);
        startButton.classList = 'start btn btn-primary';
    }
}

function stop_click() {
    clearInterval(timerId);
    milsec.innerHTML = '000';
    globalMilisecs = 0;
    startButton.classList = 'start btn btn-primary';
    startButton.innerHTML = 'start';
    sec = '00';
    min = '00';
    timer.innerHTML = h + ':' + min + ':' + sec;
}

// timerId = setInterval(function() {
//     globalMilisecs++; //global
//     // ms++;
//    /* if(ms.length) >  3{
//         formatter(globalMilisecs); //  //example $h + ':' + $m + ':' + $s
//         ms = 0;
//     }*/
//     milsec.innerHTML=globalMilisecs;
//     // milsec.innerHTML++;
//
// }, 1);

// pause.addEventListener("click",pause_click);
// function pause_click(){
//     startButton = document.getElementById('pause');
//     clearInterval( timerId );
//     startButton.id = 'start';
//     startButton.innerHTML = 'start';
//     startButton.classList = 'btn btn-primary';
// }


// pause.addEventListener("click",pause_click);
// function pause_click(){
//     startButton = document.getElementById('pause');
//     clearInterval( timerId );
//     startButton.id = 'start';
//     startButton.innerHTML = 'start';
//     startButton.classList = 'btn btn-primary';
// }

// pause.addEventListener("click",pause_click);
// function pause_click(){
//     clearInterval( timerId );
//     }


// function start_click(){
//     startButton = document.getElementById('start');
//     // startButton.id = 'pause';
//     startButton.innerHTML = 'pause';
//     startButton.classList = 'btn btn-warning';
//     console.log(startButton);
//
//
//     timerId = setInterval(function() {
//         globalMilisecs++; //global
//         // ms++;
//         /* if(ms.length) >  3{
//          formatter(globalMilisecs); //  //example $h + ':' + $m + ':' + $s
//          ms = 0;
//          }*/
//         milsec.innerHTML=globalMilisecs;
//         // milsec.innerHTML++;
//     }, 1);
//
//     // pause.addEventListener("click",pause_click);
//     // function pause_click(){
//     //     startButton = document.getElementById('pause');
//     //     clearInterval( timerId );
//     //     startButton.id = 'start';
//     //     startButton.innerHTML = 'start';
//     //     startButton.classList = 'btn btn-primary';
//     // }
// }
//
// pause.addEventListener("click",pause_click);
// function pause_click(){
//     startButton = document.getElementById('pause');
//     clearInterval( timerId );
//     startButton.id = 'start';
//     startButton.innerHTML = 'start';
//     startButton.classList = 'btn btn-primary';
// }


// var elem = document.querySelector('button');
// function number() {
//     console.log(555);
//     // return elem.removeEventListener('click', number);
// }
// elem.addEventListener('click', number);


// document.onclick = function(event) {
//     if (!event.target.hasAttribute('button')) return;
//
//     var globalMilisecs = event.target;
//
//     globalMilisecs.innerHTML++;
// };

