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
        "repeat (5) times",
        "say [count]",
        "change [count] by 1"
    ];
    const userSequence = Array.from(target.children).map(el => el.textContent.trim());

    // Compare user sequence with the correct one
    if (JSON.stringify(userSequence) === JSON.stringify(correct)) {
        alert("🎉 Great job! Your loop is correct and will count from 1 to 5!");
    } else {
        alert("❌ Oops! That's not quite right. Remember: 1. Start with flag, 2. Repeat 5 times, 3. Say count, 4. Increase count");
    }
});

// Loop example functionality
document.getElementById('btn').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.innerHTML = '<h5>for loop output:</h5>';

    // for loop example
    for (let i = 0; i < 5; i++) {
        output.innerHTML += `Hello ${i} <br>`;
    }

    output.innerHTML += '<h5 class="mt-3">while loop output:</h5>';

    // while loop example
    let j = 0;
    while (j < 5) {
        output.innerHTML += `Number: ${j}<br>`;
        j++;
    }

    output.innerHTML += '<h5 class="mt-3">do...while loop output:</h5>';

    // do...while loop example
    let k = 0;
    do {
        output.innerHTML += `Count: ${k}<br>`;
        k++;
    } while (k < 5);
});
