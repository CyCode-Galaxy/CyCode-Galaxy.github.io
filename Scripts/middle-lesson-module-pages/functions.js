// Temperature Conversion Challenge
document.getElementById('test-function').addEventListener('click', function() {
    const jsCode = document.getElementById('js-function-code').value;
    const pyCode = document.getElementById('py-function-code').value;
    const output = document.getElementById('function-test-output');

    if (!jsCode.trim() && !pyCode.trim()) {
        output.innerHTML = '<div class="alert alert-warning">Please write some code in at least one language</div>';
        return;
    }

    // Test cases
    const testCases = [
        { celsius: 0, fahrenheit: 32 },
        { celsius: 100, fahrenheit: 212 },
        { celsius: 25, fahrenheit: 77 },
        { celsius: -10, fahrenheit: 14 },
    ];

    let results = '<h6>Test Results:</h6><div class="table-responsive"><table class="table table-sm"><thead><tr><th>Celsius</th><th>Expected F°</th><th>JavaScript</th><th>Python</th></tr></thead><tbody>';

    testCases.forEach(testCase => {
        let jsResult = "Not tested";
        let pyResult = "Not tested";

        // Simulate Javascript test
        if (jsCode.trim()) {
            try {
                const expected = testCase.fahrenheit;
                const calculated = Math.round((testCase.celsius * 9/5) + 32);
                
                if (jsCode.includes("return") && jsCode.includes("9/5") && jsCode.includes("+ 32")) {
                    jsResult = calculated === expected 
                        ? `<span class="text-success">✔ ${calculated} (Correct)</span>`
                        : `<span class="text-danger">✖ ${calculated} (Should be ${expected})</span>`;
                } else {
                    jsResult = '<span class="text-danger">✖ Formula missing</span>';
                }
            } catch (e) {
                jsResult  = '<span class="text-danger">Error</span>';
            }
        }

        // Simulate Python test
        if (pyCode.trim()) {
            try {
                const expected = testCase.fahrenheit;
                const calculated = Math.round((testCase.celsius * 9/5) + 32);

                if (pyCode.includes("return") && pyCode.includes("9/5") && pyCode.includes("+ 32")) {
                    pyResult = calculated === expected
                    ? `<span class="text-success">✔ ${calculated} (Correct)</span>`
                    : `<span class="text-danger">✖ ${calculated} (Should be ${expected})</span>`;
                } else {
                    pyResult = '<span class="text-danger">✖ Formula missing</span>';
                }
            } catch (e) {
                pyResult  = '<span class="text-danger">Error</span>';
            }
        }

        results += `<tr>
            <td>${testCase.celsius}°C</td>
            <td>${testCase.fahrenheit}°F</td>
            <td>${jsResult}</td>
            <td>${pyResult}</td>
        </tr>`;
    });

    results += '</tbody></table></div>';

    // Add advice based on results
    if(jsCode.includes("9/5") || (pyCode.includes("9/5"))) {
        results += '<div class="alert alert-success mt-3">Correct formula implementation!</div>';
    } else {
        results += '<div class="alert alert-warning mt-3">Remember the conversion formula: F = (C × 9/5) + 32</div>';
    }

    output.innerHTML = results;
});

// Show solution toggle
document.getElementById('show-function-solution').addEventListener('click', function() {
    const solution = document.getElementById('function-solution');
    const button = this;

    if (solution.classList.contains('d-none')) {
        solution.classList.remove('d-none');
        button.textContent = 'Hide Solution';
    } else {
        solution.classList.add('d-none');
        button.textContent = 'Show Solution';
    }
});

// Tab key support in textareas
document.querySelectorAll('.code-editor').forEach(textarea => {
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;

            this.value = this.value.substring(0, start) + '   ' + this.value.substring(end);

            this.selectionStart = this.selectionEnd = start + 4;
        }
    });
});
