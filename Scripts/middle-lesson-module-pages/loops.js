// FizzBuzz Challenge 
document.getElementById('test-loop').addEventListener('click', function() {
    const jsCode = document.getElementById('js-loop-code').value;
    const pyCode = document.getElementById('py-loop-code').value;
    const output = document.getElementById('loop-output');

    if (!jsCode.trim() && !pyCode.trim()) {
        output.innerHTML = '<div class="alert alert-warning">Please write some code in at least one language</div>';
        return;
    }

    // Test cases
    const testCases = [
        { num: 3, expected: "Fizz" },
        { num: 5, expected: "Buzz" },
        { num: 15, expected: "FizzBuzz" },
        { num: 2, expected: "2" },
        { num: 30, expected: "FizzBuzz"}
    ];

    let results = '<h6>Test Results:</h6><div class="table-responsive"><table class="table table-sm"><thead><tr><th>Number</th><th>Expected</th><th>JavaScript</th><th>Python</th></tr></thead><tbody>';

    testCases.forEach(testCase => {
        let jsResult = "Not tested";
        let pyResult = "Not tested";

        // Simulate Javascript test
        if (jsCode.trim()) {
            try {
                if ((testCase.num % 15 === 0 && jsCode.includes("FizzBuzz")) ||
                    (testCase.num % 3 === 0 && jsCode.includes("Fizz")) ||
                    (testCase.num % 5 === 0 && jsCode.includes("Buzz")) ||
                    (testCase.num % 3 !== 0 && testCase.num % 5 !== 0 && jsCode.includes(testCase.num.toString()))) {
                    jsResult = '<span class="text-success">✔ Passed</span>';
                } else {
                    jsResult = '<span class="text-danger">✖ Failed</span>';
                }
            } catch (e) {
                jsResult  = '<span class="text-danger">Error</span>';
            }
        }

        // Simulate Python test
        if (pyCode.trim()) {
            try {
                if ((testCase.num % 15 === 0 && pyCode.includes("FizzBuzz")) ||
                    (testCase.num % 3 === 0 && pyCode.includes("Fizz")) ||
                    (testCase.num % 5 === 0 && pyCode.includes("Buzz")) ||
                    (testCase.num % 3 !== 0 && testCase.num % 5 !== 0 && pyCode.includes(str(testCase.num)))) {
                    pyResult = '<span class="text-success">✔ Passed</span>';
                } else {
                    pyResult = '<span class="text-danger">✖ Failed</span>';
                }
            } catch (e) {
                pyResult  = '<span class="text-danger">Error</span>';
            }
        }

        results += `<tr>
            <td>${testCase.num}</td>
            <td>${testCase.expected}</td>
            <td>${jsResult}</td>
            <td>${pyResult}</td>
        </tr>`;
    });

    results += '</tbody></table></div>';

    // Add advice based on results
    if((jsCode.includes("%") && jsCode.includes("===")) ||
       (pyCode.includes("%") && pyCode.includes("=="))) {
        results += '<div class="alert alert-success mt-3">Good use of modulus operator for divisibility checks!</div>';
    } else {
        results += '<div class="alert alert-warning mt-3">Try using the modulus operator (%) to check for multiples</div>';
    }

    output.innerHTML = results;
});

// Show solution toggle
document.getElementById('show-loop-solution').addEventListener('click', function() {
    const solution = document.getElementById('loop-solution');
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