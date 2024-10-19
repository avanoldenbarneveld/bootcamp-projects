/* Recibe un valor desde el usuario y haz una cuenta atrás y avisa cuando
haya acabado. */

function countdown() {
    let time = parseInt(prompt("Enter the number of seconds for the countdown:"), 10);
  
    if (isNaN(time) || time <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
  
    const intervalId = setInterval(() => {
      console.log(time);
      time--;
  
      if (time < 0) {
        clearInterval(intervalId);
        alert("Countdown finished!");
      }
    }, 1000);
  }
  
  countdown();
  