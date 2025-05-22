// Referencing to the source and target block containers
const source = document.getElementById('block-source');
const target = document.getElementById('block-target');

// Variable to store the block being dragged
let draggedItem = null;

// Make each draggable block listen for drag start
document.querySelectorAll('.draggable-block').forEach(block => {
    block.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });
});

// Allow dropping blocks in target area
target.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Handle drop event in target area
target.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem && !target.contains(draggedItem)) {
        target.appendChild(draggedItem);
    }
});

// Allow the dropping blocks back in the source area
source.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Handle drop event in source area
source.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem && !source.contains(draggedItem)) {
        source.appendChild(draggedItem);
    }
});

// Check the user sequence when button is clicked
document.getElementById('check-sequence').addEventListener('click', () => {
    // Define the correct sequence
    const correct = [
        "When flag clicked",
        "Move 10 steps",
        "Say \"Meow!\"",
        "Turn 15 degrees"
    ];

    // Get the user selected sequence from the target area
    const userSequence = Array.from(target.children).map(el=> el.textContent.trim());

    // Comparing the user's sequence with the correct one
    if (JSON.stringify(userSequence) === JSON.stringify(correct)) {
        alert("🎉 Great job! The sequence is correct.");
    } else {
        alert("❌ Oops! That’s not the right sequence. Try again.");
    }
});