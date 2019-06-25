const videoLists = [...document.querySelectorAll('li[data-time]')];
const totalSeconds = videoLists
  .map(item => item.dataset.time)
  .map(timeCode => {
    const [min, sec] = timeCode.split(':');
    return parseInt(min)*60 + parseInt(sec);
  })
  .reduce((acc, current) => acc + current);

let secondsLeft = totalSeconds;    

const hoursFromTotal = Math.floor(totalSeconds / 3600);
secondsLeft = totalSeconds % 3600;      
const minutesFromTotal = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60; 
const secondsFromTotal = secondsLeft;

console.log(hoursFromTotal, minutesFromTotal, secondsFromTotal);
