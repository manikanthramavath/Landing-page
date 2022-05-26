const days = document.querySelector('.days h3');
const minutes = document.querySelector('.minutes h3');
const hours = document.querySelector('.hours h3');
const seconds = document.querySelector('.seconds h3');

const coutdown =setInterval(() => {
    const date = new Date("January 1, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const dist = date - now
    const dy = addZeroNum(Math.floor(dist / (1000 * 60 * 60* 24)));
    const hr = addZeroNum(Math.floor((dist % (1000 * 60 *60 *24)) / (1000 * 60 * 60)));
    const min = addZeroNum(Math.floor((dist % (1000 * 60 *60)) / (1000 * 60)));
    const sec = addZeroNum(Math.floor((dist % (1000 * 60))/(1000)));

    days.innerHTML = dy;
    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

}, 1000);

function addZeroNum(num){
    return num < 0 ? '0${num}' : num
}

document.querySelector('.container count h3').style.display = 'none';
document.querySelector('.container').classList.add('spinner-1');
setTimeout(() =>{
    document.querySelector('.container').classList.remove('spinner-1');
    document.querySelector('.container count h3').style.display = 'block';
}

,4000)

