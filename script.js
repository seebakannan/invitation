// Set the wedding date (year, month, day, hour, minute, second)
const weddingDate = new Date("2024-11-20T17:09:30");

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the appropriate spans
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is complete, show a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "<p>We are married! 🎉</p>";
  }
}, 1000);
