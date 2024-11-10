const quotes = [
    "The best way to predict the future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success is not the key to happiness. Happiness is the key to success."
];

document.getElementById("spinButton").addEventListener("click", function() {
    const wheel = document.getElementById("wheel");
    const randomDegree = Math.floor(Math.random() * 360 + 720); // Spin at least 2 full rotations
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Display a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").innerText = randomQuote;
});
