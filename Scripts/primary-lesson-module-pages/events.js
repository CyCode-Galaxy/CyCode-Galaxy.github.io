// Drag and Drop functionality for Loop Blocks 

// Get source and target containers
const source = document.getElementById('block-source');
const target = document.getElementById('block-target');
let draggedItem = null;

// Adding dragstart event to each draggable block
document.querySelectorAll('.draggable-block').forEach(block => {
    block.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });
});

// Allow dropping on target container
target.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Handle drop event on target container
target.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem && !target.contains(draggedItem)) {
        target.appendChild(draggedItem);
    }
});

// Allow dropping back into source container
source.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Handle drop event on source container
source.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem && !source.contains(draggedItem)) {
        source.appendChild(draggedItem);
    }
});

// Check Button Functionality
document.getElementById('check-sequence').addEventListener('click', () => {
    const correct = [
        "when [button] clicked",
        "say \"Hello!\"",
        "play sound [meow]",
        "change color"
    ];
    const userSequence = Array.from(target.children).map(el => el.textContent.trim());

    // Compare user sequence with the correct one
    if (JSON.stringify(userSequence) === JSON.stringify(correct)) {
        alert("🎉 Great job! Your event handler would make the button interactive!");
    } else {
        alert("❌ Almost there! Remember: 1. Start with the event, 2. Then add the actions");
    }
});

// Event demo functionality
document.getElementById('demoClickBtn').addEventListener('click', function() {
    alert("You clicked the button! This alert is triggered by a click event listener.");
});

document.getElementById('keyDemo').addEventListener('keydown', function(e) {
    document.getElementById('keyOutput').textContent = `Key pressed: ${e.key} (Code: ${e.code})`;
    e.preventDefault();
});

// Event playground
const playground = document.getElementById('eventDemoArea');
const eventOutput = document.getElementById('eventOutput');
const mousePosition = document.getElementById('mousePosition');

document.getElementById('playgroundBtn').addEventListener('click', function() {
    eventOutput.innerHTML += '<div>Button was clicked!</div>';
});

playground.addEventListener('mousemove', function(e) {
    const rect = playground.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePosition.textContent = `Mouse position: X=${Math.round(x)}, Y=${Math.round(y)}`;
});

playground.addEventListener('mouseenter', function () {
    eventOutput.innerHTML += '<div>Mouse entered the area</div>';
});

playground.addEventListener('mouseleave', function () {
    eventOutput.innerHTML += '<div>Mouse left the area</div>';
});

playground.addEventListener('dblclick', function () {
    eventOutput.innerHTML += '<div>Double click detected!</div>';
});