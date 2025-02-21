let is24HourFormat = true;

// Function to update the clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = '';

  if (!is24HourFormat) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
  }

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('clock').textContent = timeString;
}

// Function to update the background based on the time of day
function updateBackground() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 18) {
    // Daytime (sun)
    document.body.style.backgroundImage = "url('src/sun.png')";
    document.body.style.backgroundColor = '#313B4F';
  } else {
    // Nighttime (moon)
    document.body.style.backgroundImage = "url('src/moon.png')";
    document.body.style.backgroundColor = '#313B4F';
  }
}

// Functions to manually change the background
document.getElementById('setSunBackground').addEventListener('click', function() {
  document.body.style.backgroundImage = "url('src/sun.png')";
});

document.getElementById('setMoonBackground').addEventListener('click', function() {
  document.body.style.backgroundImage = "url('src/moon.png')";
});

// Function to toggle time format
document.getElementById('toggleFormat').addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  document.getElementById('toggleFormat').textContent = is24HourFormat ? '12-hour' : '24-hour';
});

// Start the clock and background
setInterval(updateClock, 1000);
updateClock();
updateBackground(); // Automatic background change based on the time of day