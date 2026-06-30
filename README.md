# Digital Clock ⏰

A simple, clean digital clock built using **HTML, CSS, and JavaScript**.

## Features
- Live digital clock (updates every second)
- Date display (day, date, month, year)
- Greeting message that changes based on time of day
- Switch between 12-hour and 24-hour format
- Dark mode / Light mode toggle
- Bonus stopwatch with Start, Pause, and Reset

## Files
- `index.html` → page structure
- `style.css` → styling and dark mode
- `script.js` → clock logic, stopwatch, and button actions

## How to Run
1. Download/clone the project folder.
2. Open `index.html` in any web browser.
3. That's it — no installation needed!

## How It Works (Quick Overview)
- JavaScript's `Date()` object gets the current time and date.
- `setInterval()` updates the clock every 1000ms (1 second).
- Buttons use simple `addEventListener` clicks to toggle format/theme and control the stopwatch.

## Possible Improvements
- Add an alarm feature
- Add multiple timezone support
- Save dark mode preference using localStorage

## License
Free to use for learning and personal projects.