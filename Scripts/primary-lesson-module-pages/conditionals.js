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
        "When flag clicked",
        "if [number] > 0",
        "say \"Positive\"",
        "else if [number] < 0",
        "say \"Negative\"",
        "else",
        "say \"Zero\""
    ];
    const userSequence = Array.from(target.children).map(el => el.textContent.trim());

    // Compare user sequence with the correct one
    if (JSON.stringify(userSequence) === JSON.stringify(correct)) {
        alert("🎉 Perfect! Your conditional will correctly check any number!");
    } else {
        alert("❌ Not quite right. Remember the order: 1. Check positive, 2. Say positive, 3. Check negative, 4. Say Negative, 5. Else say zero");
    }
});

// Loop example functionality
document.getElementById('checkAgeBtn').addEventListener('click', () => {
    const age = parseInt(document.getElementById('ageInput').value);
    const output = document.getElementById('ageOutput');

    if (age > 18) {
        output.innerHTML = `<div class="alert alert-success">Adult (${age} > 18)</div>`;
    } else if (age == 18) {
        output.innerHTML = `<div class="alert alert-info">Just became adult! (${age} = 18)</div>`;
    } else {
        output.innerHTML = `<div class="alert alert-warning">Minor (${age} < 18)</div>`;
    }
});
