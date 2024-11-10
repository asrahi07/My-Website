const quotes = [
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "You are never too old to set another goal or to dream a new dream."
];

function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").innerText = randomQuote;
}

// Change quote every minute (60000 milliseconds)
setInterval(displayRandomQuote, 60000);

// Display the first quote immediately
displayRandomQuote();

document.getElementById("spinButton").addEventListener("click", function() {
    const wheel = document.getElementById("wheel");
    const randomDegree = Math.floor(Math.random() * 360 + 720); // Spin at least 2 full rotations
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
