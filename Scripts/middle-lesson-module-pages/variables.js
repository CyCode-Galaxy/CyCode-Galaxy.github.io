// Functionality
document.getElementById('check-type').addEventListener('click', function() {
    const input = document.getElementById('type-input').value;
    const output = document.getElementById('type-output');

    if (input === '') {
        output.innerHTML = '<div class="alert alert-warning">Please enter a value first</div>';
        return;
    }

    // Try to determine type
    let type, exampleCode;

    // Check for number 
    if (!isNaN(input) && input.trim() !== '') {
        type = 'Number';
        exampleCode = `let num = ${input}; // JavaScript\nnum = ${input} # Python`;   
    }

    // Check for boolean 
    else if (input.toLowerCase() === 'true' || input.toLowerCase() === 'false') {
        type = 'Boolean';
        const jsValue = input.toLowerCase() === 'true';
        exampleCode = `let flag = ${jsValue}; // JavaScript\nflag = ${input} # Python`;
    }

    // Otherwise treat as string
    else {
        type = 'String';
        exampleCode = `let text = "${input}"; // JavaScript\ntext = "${input}" # Python`;
    }

    output.innerHTML = `
        <div class= "alert alert-success">
            <strong> Type detected: </strong> ${type}
        </div>
        <div class="code-block mt-2">
            <pre>${exampleCode}</pre>
        </div>
    `;
});

// Show solution toggle
document.getElementById('show-solution').addEventListener('click', function () {
    const solution = document.getElementById('solution');
    const button = this;

    if (solution.classList.contains('d-none')) {
        solution.classList.remove('d-none');
        button.textContent = 'Hide Solution';
    } else {
        solution.classList.add('d-none');
        button.textContent = 'Show Solution';
    }
});

// Simple code runner for the playground 
document.getElementById('run-code').addEventListener('click', function() {
    const language = document .getElementById('language-select').value;
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');

    if (!code.trim()) {
        output.innerHTML = '<div class="alert alert-warning">Please write some code first</div>';
        return;
    }

    output.innerHTML = `
        <div class = "alert alert-info">
            <strong>Output:</strong> (Simulated - would run ${language} code in a real environment)
        </div>
        <div class = "code-block mt-2">
            <pre>${code}</pre>
        </div>
    `;
});

// Tab key support in textarea
document.getElementById('code-editor').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Insert tab character
        this.value = this.value.substring(0, start) + '   ' + this.value.substring(end);

        // Move cursor position
        this.selectionStart = this.selectionEnd = start + 4;
    }
});