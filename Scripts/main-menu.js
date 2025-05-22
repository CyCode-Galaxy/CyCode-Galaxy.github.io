let studentInput = document.getElementById("name-player");
let charText = document.getElementById("char-text");

let charFrog = document.getElementById("char-frog");
let charPenguin = document.getElementById("char-penguin");
let charBear = document.getElementById("char-bear");

var studentName; // Global Variable
var studentCharacter; // Global Variable
let charChoices = ["/Image/CHARS/AstroFrog.png", "/Image/CHARS/AstroFrog.png", "/Image/CHARS/AstroFrog.png"]

// Image Slider

const slides = document.querySelectorAll('.char-slide img');
let charIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if (slides.length > 0){
        slides[charIndex].classList.add("displayChar");
    }
}
function showSlide(index){
    if (index >= slides.length){
        charIndex = 0;
    } else if (index < 0){
        charIndex = slides.length - 1;
    }
    slides.forEach(char => {
        char.classList.remove("displayChar");
    })
    slides[charIndex].classList.add("displayChar");
}
function prevChar(){
    filterNone()
    clearInterval(intervalId);
    charIndex--;
    showSlide(charIndex);
}
function nextChar(){
    filterNone()
    charIndex++;
    showSlide(charIndex);
}

function filterNone (){
    studentCharacter = ""
    charText.textContent = "Choose a Character:"
    charFrog.style.filter = "none"
    charPenguin.style.filter = "none"
    charBear.style.filter = "none"
}

document.getElementById("menu-start-btn").addEventListener("click", () => {
    studentName = studentInput.value.trim();

    if (studentName === "") {
        alert("You forgot something! Please be sure to tell us your name and choose a character.");
    } else {
        localStorage.setItem("playerName", studentName); 
        window.location.href = "/Pages/grade-level.html"; 
    }
});

charFrog.addEventListener("click", () => {
    charFrog.style.filter = "grayscale(1)"
    studentCharacter = "charFrog"
    charText.textContent = "Astro Frog"
})
charPenguin.addEventListener("click", () => {
    charPenguin.style.filter = "grayscale(1)"
    studentCharacter = "charPenguin"
    charText.textContent = "Pinggu-naut"
})
charBear.addEventListener("click", () => {
    charBear.style.filter = "grayscale(1)"
    studentCharacter = "charBear"
    charText.textContent = "Astro Bear"
})
