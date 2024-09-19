let interval; // Variable to store the interval ID

// Function to start the countdown timer
function startTimer() {
    const startButton = document.getElementById('startButton');
    const dateInput = document.getElementById('date-input').value;

    // Check if the date input is empty
    if (!dateInput) {
        alert('Please set a target date.');
        return;
    }

    const targetDate = new Date(dateInput).getTime();

    // Clear any existing interval
    if (interval) {
        clearInterval(interval);
    }

    // Disable and gray out the start button
    startButton.disabled = true;

    // Update the timer every second
    interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Check if the countdown has expired
        if (distance < 0) {
            clearInterval(interval); // Stop the interval
            document.getElementById('timer').innerHTML = "<h2 style='color: red;'>Time's Up!</h2>"; // Change the text color to red
            document.getElementById('bell').style.display = 'block'; // Show the bell icon

            // Keep the button disabled after countdown expiration
            startButton.disabled = true;
            return;
        }

        // Calculate remaining time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the display with remaining time
        document.getElementById('days').innerText = `${days}d`;
        document.getElementById('hours').innerText = `${hours}h`;
        document.getElementById('minutes').innerText = `${minutes}m`;
        document.getElementById('seconds').innerText = `${seconds}s`;
    }, 1000);
}

// Function to reset the countdown timer
function resetTimer() {
    const startButton = document.getElementById('startButton');

    // Clear the interval
    if (interval) {
        clearInterval(interval);
    }

    // Reset the display
    document.getElementById('timer').innerHTML = `
        <div id="days" class="time-unit">--d</div>
        <div id="hours" class="time-unit">--h</div>
        <div id="minutes" class="time-unit">--m</div>
        <div id="seconds" class="time-unit">--s</div>
    `;

    // Hide the bell icon and clear the input field
    document.getElementById('bell').style.display = 'none';
    document.getElementById('date-input').value = '';

    // Re-enable and restore the start button
    startButton.disabled = false;
}
