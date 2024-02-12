

try {

  let counter = 30; 

  const timer = setInterval(() => {
    const { minutes, seconds } = getTime(counter);

    showTime(minutes, seconds);
    
    if (counter === 0) {
     
      clearInterval(timer);
    } else {
      counter--;
    }
  }, 1000);

} catch (error) {
  console.error('Bir hata oluştu:', error);
}

function getTime(counter) {
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;
  return { minutes, seconds };
}

function showTime(minutes, seconds) {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

console.log()