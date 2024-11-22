document.addEventListener("DOMContentLoaded", function() {
    // Correct flags for each challenge
    const correctFlags = {
        1: "drone123",  // Challenge 1 flag
        2: "keyabc",    // Challenge 2 flag
        3: "flag_xyz",  // Challenge 3 flag
        4: "secure123", // Challenge 4 flag
        5: "password1", // Challenge 5 flag
        6: "crypto2024",// Challenge 6 flag
        7: "network2024",// Challenge 7 flag
        8: "admin123",  // Challenge 8 flag
        9: "recovery45",// Challenge 9 flag
        10: "vaultopen"  // Challenge 10 flag
    };

    // Points for each challenge
    const challengePoints = {
        1: 100,
        2: 100,
        3: 100,
        4: 100,
        5: 100,
        6: 100,
        7: 100,
        8: 100,
        9: 100,
        10: 100
    };

    // Initialize total score
    let totalScore = 0;

    // Loop through each challenge and add event listeners
    for (let i = 1; i <= 10; i++) {
        const flagInput = document.getElementById(`flag_input_${i}`);
        const submitButton = document.getElementById(`submit_flag_${i}`);
        const messageDiv = document.getElementById(`flag_message_${i}`);
        const scoreDisplay = document.getElementById('total_score'); // Assuming you have a total score display element

        submitButton.addEventListener("click", function() {
            const userFlag = flagInput.value.trim(); // Get the value entered by the user

            // Check if the entered flag is correct
            if (userFlag === correctFlags[i]) {
                // Add points to the total score
                totalScore += challengePoints[i];

                // Update the message to show flag was correct and points earned
                messageDiv.innerHTML = `<span style='color: green;'>Flag has been submitted successfully! You earned ${challengePoints[i]} points.</span>`;

                // Update total score display
                scoreDisplay.innerHTML = `Total Score: ${totalScore}`;

                // Optionally, disable the input and submit button after correct submission
                flagInput.disabled = true;
                submitButton.disabled = true;
            } else {
                // Display the message if the flag is incorrect
                messageDiv.innerHTML = "<span style='color: red;'>Wrong flag. Please try again!</span>";

                // Clear the input field for retry
                flagInput.value = "";
            }
        });
    }
});

