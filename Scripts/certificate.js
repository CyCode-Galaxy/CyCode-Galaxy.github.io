// Generating stars
const starsContainer = document.getElementById('stars-container');

// For creating 150 randomly positioned stars
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div'); // Creating a div for each star
    star.classList.add('star'); // Adding a class for styling the star

    // Randomly positioning the stars in the container
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Setting a size for the stars
    star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;

    // Setting animation duration for stars
    star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);

    // Adding the star to the container
    starsContainer.appendChild(star);
}

// Setting the name on page load
window.onload = function () {
    //const nameFromURL = window.studentName; // Will have to replae this file with the user name input file
    document.getElementById("name").innerText = window.studentName
    alert("Welcome! Your certificate is ready.");
};

// Downloading certificate as image from the download button
document.getElementById('download-btn').addEventListener('click', () => {
    html2canvas(document.querySelector('.certificate')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL(); // Convert canvas to image data URL
        link.click();
    });
});