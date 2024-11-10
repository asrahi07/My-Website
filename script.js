// JavaScript for the spinning wheel functionality
const spinButton = document.getElementById('spinButton');
const wheel = document.getElementById('wheel');
const funnyMessage = document.getElementById('funnyMessage');

// Funny messages for the wheel sections
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
    const randomSpin = Math.floor(Math.random() * 360) + 5000; // Random spin amount + minimum of 5000 degrees
    wheel.style.transform = `rotate(${randomSpin}deg)`; // Apply spin

    // After the wheel stops spinning, show a random message
    setTimeout(() => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        funnyMessage.textContent = randomMessage;
    }, 3000); // Wait for 3 seconds (matching spin duration)
});
