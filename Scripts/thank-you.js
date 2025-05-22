// Function to redirect the player to the game's start screen
function playAgain() {
    window.location.href = "coverpage.html"
}

// Function to exit the game
function exitGame() {
    window.close();
    alert("Thanks for playing!");
}

// Create stars for background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const duration = Math.random() * 4 + 1;
        star.style.setProperty('--duration', `${duration}s`);

        starsContainer.appendChild(star);
    }
}

// Create galaxies for background
function createGalaxies() {
    const galaxiesContainer = document.getElementById('galaxies');
    const galaxyCount = 5;
    const colors = [
        'rgba(138, 43, 226, 0.3)',
        'rgba(75, 0, 130, 0.3)',
        'rgba(225, 105, 180, 0.3)',
        'rgba(0, 191, 255, 0.3)',
        'rgba(147, 112, 219, 0.3)'
    ];

    for (let i = 0; i < galaxyCount; i++) {
        const galaxy = document.createElement('div');
        galaxy.classList.add('galaxy');

        const size = Math.random() * 200 + 100;
        galaxy.style.width = `${size}px`;
        galaxy.style.height = `${size}px`;

        galaxy.style.left = `${Math.random() * 100}%`;
        galaxy.style.top = `${Math.random() * 100}%`;

        const duration = Math.random() * 60 + 120;
        galaxy.style.setProperty('--galaxy-duration', `${duration}s`);

        const colorIndex = Math.floor(Math.random() * colors.length);
        galaxy.style.setProperty('--galaxy-color', colors[colorIndex]);

        galaxiesContainer.appendChild(galaxy);
    }
}

// Initialize when page loads
window.onload = function() {
    createStars();
    createGalaxies();
};