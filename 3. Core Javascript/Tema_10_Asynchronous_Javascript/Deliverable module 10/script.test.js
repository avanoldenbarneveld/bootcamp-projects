document.body.innerHTML = `
  <h1>Stopwatch</h1>
  <p id="timer">00:00</p>
  <button id="toggle">Start</button>
`;

const timerElement = document.getElementById('timer');
const toggleButton = document.getElementById('toggle');

const { formatTime, updateTime, toggleTimer } = require('./script');

jest.useFakeTimers();

describe('Stopwatch functionality', () => {
    beforeEach(() => {
        jest.clearAllTimers();
        timerElement.textContent = "00:00";
        toggleButton.textContent = "Start";
    });

    test('updates time correctly', () => {
        updateTime();
        expect(timerElement.textContent).toBe('00:01');
    });

    test('rapid start and stop', () => {
        toggleTimer();
        toggleTimer();
        expect(toggleButton.textContent).toBe('Start');
        jest.advanceTimersByTime(1000);
        expect(timerElement.textContent).toBe('00:00');
    });

    test('timer should not advance if not started', () => {
        jest.advanceTimersByTime(1000);
        expect(timerElement.textContent).toBe('00:00');
    });

    test('button text toggles correctly', () => {
        toggleTimer();
        expect(toggleButton.textContent).toBe('Pause');
        toggleTimer();
        expect(toggleButton.textContent).toBe('Start');
    });

    test('button text does not change without interaction', () => {
        expect(toggleButton.textContent).toBe('Start');
    });

    test('timer starts at zero', () => {
        expect(timerElement.textContent).toBe('00:00');
    });

    test('formats seconds correctly with leading zero', () => {
        expect(formatTime(9)).toBe('00:09');
    });
});