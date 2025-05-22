// Conditional Challenge Solution
document.getElementById('test-conditional').addEventListener('click', function() {
    const jsCode = document.getElementById('js-conditional-code').value;
    const pyCode = document.getElementById('py-conditional-code').value;
    const output = document.getElementById('conditional-output');

    if (!jsCode.trim() && !pyCode.trim()) {
        output.innerHTML = '<div class="alert alert-warning">Please write some code in at least one language</div>';
        return;
    }

    // Test cases
    const testCases = [
        { isSunny: true, isRaining: false, temperature: 75, expected: "Go to the beach"},
        { isSunny: true, isRaining: false, temperature: 65, expected: "Go for a walk"},
        { isSunny: false, isRaining: true, temperature: 75, expected: "Visit a museum"},
        { isSunny: false, isRaining: true, temperature: 65, expected: "Stay home and read"},
        { isSunny: false, isRaining: false, temperature: 70, expected: "Check the weather again"}
    ];

    let results = '<h6>Test Results:</h6><div class="table-responsive"><table class="table table-sm"><thead><tr><th>Case</th><th>Expected</th><th>JavaScript</th><th>Python</th></tr></thead><tbody>';
    
    testCases.forEach((testCase, index) => {
        let jsResult = "Not tested";
        let pyResult = "Not tested";

        // Simulate JavaScript test
        if (jsCode.trim()) {
            try {
                if (jsCode.includes("Go to the beach") && testCase.expected === "Go to the beach") {
                    jsResult = '<span class="text-success">✔ Passed</span>';
                } else {
                    jsResult = '<span class="text-danger">✖ Failed</span>';
                }
            } catch (e) {
                jsResult = '<span class ="text-danger">Error</span>'
            }
        }

        // Python test
        if (pyCode.trim()) {
            try {
                if (pyCode.includes("Go to the beach") && testCase.expected === "Go to the beach") {
                    pyResult = '<span class="text-success">✔ Passed</span>';
                } else {
                    pyResult = '<span class="text-danger">✖ Failed</span>';
                }
            } catch (e) {
                pyResult = '<span class="text-danger">Error</span>';
            }
        }

        results += `<tr>
            <td>Case ${index + 1}</td>
            <td>${testCase.expected}</td>
            <td>${jsResult}</td> 
            <td>${pyResult}</td>
        </tr>`;
    });

    results += '</tbody></table></div>';

    // Adding advice based on results
    if (jsCode.includes("if") && jsCode.includes("else if") ||
        pyCode.includes("if") && pyCode.includes("elif")) {
            results += '<div class="alert alert-success mt-3">Good job using multiple conditions!</div>';
        } else {
            results += '<div class="alert alert-warning mt-3"> Try using if-else if-else (or if-elif-else in Pthon) for multiple conditions</div>';
        }

        output.innerHTML = results;
});

// Show solution toggle
document.getElementById('show-conditional-solution').addEventListener('click', function() {
    const solution = document.getElementById('conditional-solution');
    const button = this;

    if (solution.classList.contains('d-none')) {
        solution.classList.remove('d-none');
        button.textContent = 'Hide Solution';
    } else {
        solution.classList.add('d-none');
        button.textContent = 'Show Solution';
    }
});

// Tab key support in text areas
document.querySelectorAll('.code-editor').forEach(textarea => {
    textarea.addEventListener('keydown', function(e) {
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
});
