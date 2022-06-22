// app_19


const listHour = document.querySelector('body #section .listTime .listHour');
const listMinute = document.querySelector('body #section .listTime .listMinute');
const listAmPm = document.querySelector('body #section .listTime .listAmPm');
const songAlarmMp3 = document.querySelector('body #section audio.soundAlarm');
const imgAlarm = document.querySelector('body #section .img > img');
// const arrSelect;
const btnAlarm = document.querySelector('body #section > .btnAlarm');

let hr = -1;
let min = -1;
const afterTimePhause = 1;
let check = false;


let arrSelect = document.querySelectorAll('body #section .listTime select');
btnAlarm.addEventListener('click',function(){
    if(btnAlarm.value == 'Set Alarm'){
        let conteur = -1;
        for(let i = 0;i<arrSelect.length;i++){
            if(arrSelect[i].selectedIndex == 0){
                conteur = i;
                break;
            }
        }
        if(conteur > -1){
            alert(`file ${arrSelect[conteur].value}`);
            conteur = -1;
        }
        else if(conteur == -1){
            arrSelect.forEach(function(item,index){
                item.style.cssText = `color:grey;border: 1px solid #8080806e;cursor: not-allowed;`;
                item.setAttribute('disabled','');
                arrSelect[index] = item.value;
            }); 
            btnAlarm.value = 'Clear Alarm';
            btnAlarm.setAttribute('title','Clear Alarm'); 
            hr = arrSelect[0].value;
            min = (Number(arrSelect[1].value)+afterTimePhause);
            console.log(min);
            console.log(hr);
            check = true;
        }
    }
    else if(btnAlarm.value == 'Clear Alarm'){
        const arrSelect = document.querySelectorAll('body #section .listTime select');
        arrSelect.forEach(function(item){
            item.selectedIndex = 0;
            item.removeAttribute('disabled');
            item.removeAttribute('style');
        }); 
        btnAlarm.value = 'Set Alarm';
        btnAlarm.setAttribute('title','Set Alarm');
        songAlarmMp3.pause();
        imgAlarm.classList.remove('imgAalarm');
        arrSelect.length = 0;
    };
});

const stop = setInterval(Time,1000);
function Time(){
    const h2 = document.querySelector('body #section .time > h2');
    const date = new Date();
    // date.setHours(13);                                   //test Hours
    const hour = date.getHours()
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    if(String(hour).length == 1){h2.children[0].textContent = '0'+hour;}
    else if(String(hour).length  > 1){h2.children[0].textContent = hour;}
    if(String(minute).length == 1){h2.children[1].textContent = '0'+minute;}
    else if(String(minute).length  > 1){h2.children[1].textContent = minute;}
    if(String(second).length == 1){h2.children[2].textContent = '0'+second;}
    else if(String(second).length  > 1){h2.children[2].textContent = second;}
    if(hour > 12){
        h2.children[3].textContent = 'PM';
    } 
    else if(hour <= 12){h2.children[3].textContent = 'AM'}
    // 
    function pauseAlarmAfterTime(h,m,Hou,Min){
        if(arrSelect[2].value == 'AM'){
            if( h == Hou && m == Min){
                songAlarmMp3.pause();
                imgAlarm.classList.remove('imgAalarm');
                arrSelect.length = 0;
                hr = -1;
                min = -1;
                check = false;
            }
        }
        else if(arrSelect[2].value == 'PM'){
            if( (Number(h)+12) == Hou && m == Min){
                songAlarmMp3.pause();
                imgAlarm.classList.remove('imgAalarm');
                arrSelect.length = 0;
                hr = -1;
                min = -1;
                check = false;
            }
        }
    }
    // 
    if(check == true){
        // let arrSelect = document.querySelectorAll('body #section .listTime select');
        if(arrSelect[2].value == 'AM'){
            if(hour == arrSelect[0].value && minute == arrSelect[1].value){
                songAlarm();
                pauseAlarmAfterTime(hr,min,hour,minute);
            }
        }
        else if(arrSelect[2].value == 'PM'){
            if(hour == (Number(arrSelect[0].value)+12) && minute == arrSelect[1].value){
                songAlarm();
                pauseAlarmAfterTime(hr,min,hour,minute);
            } 
        }
        
    }
}

function songAlarm(){
    songAlarmMp3.play();
    imgAlarm.classList.add('imgAalarm');
};

window.onload = function(){
    listHour.selectedIndex = 0;
    listMinute.selectedIndex = 0;
    listAmPm.selectedIndex = 0;
}
