let timeLeft = 15 * 60; // 15 minutes in seconds
let timerId;

// Function to start the timer
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

// Function to go to Section 2
document.getElementById('nextButton').addEventListener('click', () => {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'block';
    startTimer(); // Start the timer when Section 2 appears
});
