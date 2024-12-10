
// Set the event's start and end date and time
// Start time: 15th December 2024, 10:00:00
var startDate = new Date("2024-12-20T10:00:00").getTime();
//  var startDate = new Date().getTime() - 60000; // 1 minute ago for testing

// End time: 15th December 2024, 16:00:00 (6 hours later)
var endDate = startDate + 6 * 60 * 60 * 1000; 
// var endDate = new Date().getTime() - 1000;

// Function to update the countdown every second
var countdownTimer = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();
    
    // If the countdown hasn't started yet, show the start message
    if (now < startDate) {
        document.getElementById("time-left").innerHTML = "The timer will begin once the Round Start's";
    } 
    // If the countdown is ongoing, show the remaining time until the end
    else if (now < endDate) {
        var timeLeft = endDate - now;
        document.getElementById("time-left").innerHTML = "Time Left: " + formatTime(timeLeft);
    } 
    // If the time has passed, display "The Round is Over"
    else {
        clearInterval(countdownTimer);
        showRoundEndMessage();
    }
}, 1000);

// Function to format the time in "d h m s" format
function formatTime(timeLeft) {
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

// Function to show the message when the round ends and make the page inaccessible
function showRoundEndMessage() {
    // Hide all page content
    document.body.style.overflow = "hidden"; // Disable scrolling
    document.body.style.pointerEvents = "none"; // Disable interactions with page elements
    
    // Create a message div
    var message = document.createElement("div");
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.fontSize = "36px";
    message.style.color = "#ff3333";
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.backgroundColor = "white";
    message.style.padding = "20px";
    message.style.borderRadius = "10px";
    message.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    
    message.innerHTML = `Round has Ended,<br>Thanks for Participation<br>Back to Home<br>`;
    document.body.appendChild(message);
    
}
