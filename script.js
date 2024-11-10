// script.js
let isRolling = false;
let lastX = 0;
let rotation = 0;
let lastDeltaX = 0; // Store the last delta for inertia
let inertia = 0; // Inertia value
const spinner = document.querySelector('.spinner'); // Updated to select by class

// Mouse events
spinner.addEventListener('mousedown', (event) => {
    isRolling = true;
    lastX = event.clientX;
    // Add mousemove event listener
    document.addEventListener('mousemove', rollSpinner);
});

document.addEventListener('mouseup', () => {
    isRolling = false;
    document.removeEventListener('mousemove', rollSpinner);
    applyInertia(); // Start inertia effect
});

// Touch events
spinner.addEventListener('touchstart', (event) => {
    isRolling = true;
    lastX = event.touches[0].clientX;
    // Add touchmove event listener
    document.addEventListener('touchmove', rollSpinner);
});

document.addEventListener('touchend', () => {
    isRolling = false;
    document.removeEventListener('touchmove', rollSpinner);
    applyInertia(); // Start inertia effect
});

function rollSpinner(event) {
    if (!isRolling) return;

    let clientX; // Check if it's a mouse event or a touch event
    if (event.type === 'mousemove') {
        clientX = event.clientX;
    } else if (event.type === 'touchmove') {
        clientX = event.touches[0].clientX;
    }

    const deltaX = clientX - lastX;
    rotation += deltaX * 1.5; // Adjust this value for sensitivity

    spinner.style.transform = `rotate(${rotation}deg)`;

    lastDeltaX = deltaX; // Store the last delta for inertia
    lastX = clientX;
}

function applyInertia() {
    inertia = lastDeltaX * 0.5; // Set initial inertia based on last movement

    const inertiaInterval = setInterval(() => {
        if (Math.abs(inertia) < 0.1) {
            clearInterval(inertiaInterval); // Stop if inertia is too low
            return;
        }

        rotation += inertia; // Apply inertia to rotation
        spinner.style.transform = `rotate(${rotation}deg)`;
        inertia *= 0.95; // Gradually reduce inertia
    }, 16); // Approximately 60 frames per second
}
