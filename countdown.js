// Function to update the countdown timer
function updateCountdown() {
    const countdownDate = new Date('2025-12-31'); // Specify your target date here (e.g., December 31, 2023)
    const now = new Date(); // Get the current date and time
    const timeRemaining = countdownDate - now; // Calculate the time remaining in milliseconds

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown timer
    const countdownTimer = document.getElementById('countdown-timer');
    countdownTimer.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Call the updateCountdown function to start the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
