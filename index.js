// For generating stars and increasing its count simultaneously
const starsContainer = document.getElementById('stars');

// Loop to create stars
for (let i = 0; i < 200; i++){
    const star = document.createElement('div'); // Creating a new star element
    const size = Math.random() * 2 + 1; // Random size between 1px and 3px stars
    const duration = Math.random() * 3 + 2 + 's'; // Animation duration
    star.classList.add('star'); // Adding 'star' class for styling
    star.style.width = size + 'px'; // Setting the width of the star
    star.style.height = size + 'px'; // Setting the height of the star
    star.style.left = Math.random() * 100 + '%'; // Horizontal positioning of the stars
    star.style.top = Math.random() * 100 + '%'; // Vertical positioning of the stars
    star.style.setProperty('--duration', duration) // Setting custom property for animation duration
    starsContainer.appendChild(star); // Adding the stars to the star container
}

// Adding animation to the orbit object
const orbitElement = document.querySelector('.orbit');
if (orbitElement) {
    const orbitingObject = document.querySelector('.orbiting-object');
    orbitingObject.style.animation = 'rotateOrbit 10s infinite linear'; // for continuos rotations
}

// Exit button functionality
document.getElementById('exitBtn').addEventListener('click', () => {
    alert('Thanks for visiting CyCode Galaxy!'); //Displays a thank u message
    window.close(); // If attempting to close the window
});

// Play button functionality
document.getElementById('startGameBtn').addEventListener('click', () => {
    // Directs to the mainscreen for the game when user clicks on the play button
    window.location.href = 'main-menu.html';
});
