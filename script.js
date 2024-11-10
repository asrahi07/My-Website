// JavaScript for the spinning wheel functionality
const spinButton = document.getElementById('spinButton');
const wheel = document.getElementById('wheel');
const funnyMessage = document.getElementById('funnyMessage');

// Funny messages for each wheel section
const messages = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t eggs tell jokes? They might crack up!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the bicycle fall over? It was two-tired!",
    "Why can’t your nose be 12 inches long? Because then it would be a foot!"
];

// Spin the wheel when the button is clicked
spinButton.addEventListener('click', () => {
    const totalSections = messages.length;
    const randomSpin = Math.floor(Math.random() * 360) + (360 * 5); // Random spin with minimum of 5 full rotations
    const sectionAngle = 360 / totalSections;

    wheel.style.transform = `rotate(${randomSpin}deg)`; // Apply spin

    // After spin ends, show a random message
    setTimeout(() => {
        const finalRotation = randomSpin % 360; // Get final position within one rotation
        const selectedIndex = Math.floor((totalSections - finalRotation / sectionAngle) % totalSections); // Find index

        funnyMessage.textContent = messages[selectedIndex];
    }, 3000); // Wait for 3 seconds (spin duration)
});
