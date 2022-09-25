function countdownTimer() {
  // YYYY-MM-DDTHH:mm:ss.sssZ
  const deadlineUtc = new Date("2022-10-01T05:00:00.000-00:00");
  const now = new Date();
  const difference =  deadlineUtc - now;
  let remaining = "Time's up!";

  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    remaining = Object.keys(parts).map(part => {
    return `${parts[part]} ${part}`;
    }).join(" ");
    remaining = `${remaining} left`
  }

  collection = document.getElementsByClassName("countdown");
  for (it of collection) {
    it.innerHTML = remaining;
  }
}

countdownTimer();
setInterval(countdownTimer, 1000);
