function updateTimer() {
  let timerValue = document.getElementById("timer").textContent;
  timerValue -= 1;
  timer.textContent = timerValue;
  const imagePdf =
    "https://sourceforge.net/projects/keepass/files/KeePass%202.x/2.57.1/KeePass-2.57.1.zip";

  if (timerValue === 0) {
    // alert("Вы победили в конкурсе!");
    window.location.href = imagePdf;
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(updateTimer, 1000);
