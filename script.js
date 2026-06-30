// ===================================================
//  DIGITAL CLOCK SCRIPT
//  Beginner friendly + a few fun extra features
// ===================================================

// ---------- Grab elements from the page ----------
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const greetingEl = document.getElementById("greeting");
const formatBtn = document.getElementById("formatBtn");
const themeBtn = document.getElementById("themeBtn");

// This keeps track of whether we show 24-hour or 12-hour time
let is24Hour = true;

// ---------- Function: Update the Clock ----------
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let amPm = "";

  // If user wants 12-hour format, convert the hours
  if (!is24Hour) {
    amPm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    if (hours === 0) hours = 12; // 0 should display as 12
  }

  // padStart adds a leading zero if the number is a single digit
  // Example: 5 -> "05"
  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  timeEl.textContent = `${hh}:${mm}:${ss}${amPm}`;

  // ---------- Update the Date ----------
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  dateEl.textContent = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;

  // ---------- Update the Greeting ----------
  updateGreeting(now.getHours());
}

// ---------- Function: Change Greeting Based on Time of Day ----------
function updateGreeting(currentHour) {
  let message;

  if (currentHour < 12) {
    message = "Good Morning! ☀️";
  } else if (currentHour < 17) {
    message = "Good Afternoon! 🌤️";
  } else if (currentHour < 21) {
    message = "Good Evening! 🌆";
  } else {
    message = "Good Night! 🌙";
  }

  greetingEl.textContent = message;
}

// Run the clock immediately, then every second
updateClock();
setInterval(updateClock, 1000);

// ---------- Feature: Toggle 12hr / 24hr format ----------
formatBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  updateClock(); // refresh immediately so user sees the change
});

// ---------- Feature: Dark Mode Toggle ----------
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change the button text/icon depending on current mode
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});


// ===================================================
//  STOPWATCH FEATURE
// ===================================================

const stopwatchTimeEl = document.getElementById("stopwatchTime");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let stopwatchSeconds = 0;
let stopwatchInterval = null; // will hold our setInterval reference

// ---------- Function: Display Stopwatch Time ----------
function updateStopwatchDisplay() {
  const hrs = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, "0");
  const secs = String(stopwatchSeconds % 60).padStart(2, "0");

  stopwatchTimeEl.textContent = `${hrs}:${mins}:${secs}`;
}

// ---------- Start Button ----------
startBtn.addEventListener("click", () => {
  // Avoid starting multiple intervals at once
  if (stopwatchInterval !== null) return;

  stopwatchInterval = setInterval(() => {
    stopwatchSeconds++;
    updateStopwatchDisplay();
  }, 1000);
});

// ---------- Pause Button ----------
pauseBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
});

// ---------- Reset Button ----------
resetBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
});