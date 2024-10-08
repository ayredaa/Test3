// Set the timer for 15 minutes
let timeLeft = 15 * 60; // 15 minutes in seconds
let timerId;

function startTimer() {
    timerId = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('time').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert("Time is up! Your answers will be submitted.");
            document.getElementById('assessmentForm').submit();
        }
        timeLeft--;
    }, 1000);
}

// Start the timer when the user focuses on Section 2
document.querySelector('h2:nth-of-type(2)').addEventListener('click', startTimer);
