// app_19


const listHour = document.querySelector('body #section .listTime .listHour');
const listMinute = document.querySelector('body #section .listTime .listMinute');
const listAmPm = document.querySelector('body #section .listTime .listAmPm');

const btnAlarm = document.querySelector('body #section > .btnAlarm');
btnAlarm.addEventListener('click',function(){
    if(btnAlarm.value == 'Set Alarm'){
        const arrSelect = document.querySelectorAll('body #section .listTime select');
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
            arrSelect.forEach(function(item){
                item.style.cssText = `color:grey;border: 1px solid #8080806e;cursor: not-allowed;`;
                item.setAttribute('disabled','');
            }); 
            btnAlarm.value = 'Clear Alarm';
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
    };
});

const stop = setInterval(Time,1000);
function Time(){
    let date = new Date();
    const h2 = document.querySelector('body #section .time > h2');
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    if(String(hour).length == 1){h2.children[0].textContent = '0'+hour;}
    else if(String(hour).length  > 1){h2.children[0].textContent = hour;}
    if(String(minute).length == 1){h2.children[1].textContent = '0'+minute;}
    else if(String(minute).length  > 1){h2.children[1].textContent = minute;}
    if(String(second).length == 1){h2.children[2].textContent = '0'+second;}
    else if(String(second).length  > 1){h2.children[2].textContent = second;}
    if(hour >= 12){
        h2.children[3].textContent = 'PM';
    } 
    else if(hour < 12){h2.children[3].textContent = 'AM'}
    const arrSelect = document.querySelectorAll('body #section .listTime select');
    if(arrSelect[2].value == 'AM'){
        if(hour == arrSelect[0].value && minute == arrSelect[1].value){
            console.log('yes');
        }
    }
    if(arrSelect[2].value == 'PM'){
        if(hour == (Number(arrSelect[0].value)+12) && minute == arrSelect[1].value){
            console.log('yes');
        }
    }
}

window.onload = function(){
    listHour.selectedIndex = 0;
    listMinute.selectedIndex = 0;
    listAmPm.selectedIndex = 0;
}
