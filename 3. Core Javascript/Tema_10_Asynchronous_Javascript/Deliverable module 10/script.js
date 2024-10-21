let timerElement = document.getElementById('timer');
let toggleButton = document.getElementById('toggle');
let interval = null;
let seconds = 0;
let isRunning = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
}

function updateTime() {
    seconds++;
    timerElement.textContent = formatTime(seconds);
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(interval);
        toggleButton.textContent = 'Start';
    } else {
        clearInterval(interval);
        interval = setInterval(() => {
            updateTime();
        }, 1000);
        toggleButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
}

toggleButton.addEventListener('click', toggleTimer);

module.exports = { formatTime, updateTime, toggleTimer, seconds };
