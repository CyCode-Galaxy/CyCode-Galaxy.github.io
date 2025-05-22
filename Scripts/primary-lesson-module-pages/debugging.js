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
        "Read the error message",
        "Find where the error occurs",
        "Check console.log() output",
        "Make a hypothesis about the fix",
        "Test your solution"
    ];
    const userSequence = Array.from(target.children).map(el => el.textContent.trim());

    // Compare user sequence with the correct one
    if (JSON.stringify(userSequence) === JSON.stringify(correct)) {
        alert("🎉 Excellent! You've got the debugging process down!");
    } else {
        alert("❌ Close! The best order is: 1. Read error, 2. Find location, 3. Check logs, 4. Hypothesize, 5. Test");
    }
});

// Buggy code demo
document.getElementById('runBuggy').addEventListener('click', () => {
    function calculateArea(width, height) {
        return width * height;
    }
    let area = calculateArea(10, 5);
    document.getElementById('bugOutput').innerHTML = `<div class = "alert alert-danger">Area should be 50, but shows: ${area} (because 'hight' is misspelled)</div>`;
});

document.getElementById('showFix').addEventListener('click', () => {
    document.getElementById('fixSolution').style.display = 'block';
});
