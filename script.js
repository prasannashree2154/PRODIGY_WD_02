let timer = 0;
let interval = null;
let isRunning = false;

const timerDisplay = document.querySelector('.timer');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.querySelector('.laps');

startStopBtn.addEventListener('click', () => {
  if (!isRunning) {
    interval = setInterval(updateTime, 1000);
    startStopBtn.textContent = 'Pause';
    isRunning = true;
  } else {
    clearInterval(interval);
    startStopBtn.textContent = 'Start';
    isRunning = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  timer = 0;
  isRunning = false;
  timerDisplay.textContent = '00:00:00';
  startStopBtn.textContent = 'Start';
  lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  if (isRunning) {
    const li = document.createElement('li');
    li.textContent = timerDisplay.textContent;
    lapsList.appendChild(li);
  }
});

function updateTime() {
  timer++;
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  timerDisplay.textContent = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
  return unit < 10 ? '0' + unit : unit;
}
