// Debugging Challenge Solutions
document.getElementById('fix-js-bug').addEventListener('click', function() {
    const buggyCode = document.getElementById('buggy-js-code');
    const fixedCode = `function calculateArea(width, height) {
    const area = width * height;
    return area;
}
    
const result = calculateArea(10, 5);
console.log("Area:", result);`;

    // Animate the fix
    buggyCode.textContent = '';
    typeEffect(buggyCode, fixedCode);

    // Show solutions section
    document.getElementById('debugging-solution').classList.remove('d-none');
});

document.getElementById('fix-p-bug').addEventListener('click', function() {
    const buggyCode = document.getElementById('buggy-py-code');
    const fixedCode = `def calculate_area(width, height):
    area = width * height
    return area

result = calculate_area(10, 5)
print("Area:", result)`;

    // Animate the fix 
    buggyCode.textContent = '';
    typeEffect(buggyCode, fixedCode);

    // Show solutions section
    document.getElementById('debugging-solution').classList.remove('d-none');
});

// Type effect for showing fixes 
function typeEffect(element, text, speed = 30) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed)
        }
    }
    typing();
}

// Interactive error explorer
const errorExamples = [
    {
        language: "JavaScript",
        code: `const numbers = [1, 2, 3];
console.log(numbers.length);`,
        error: "Uncaught TypeError: Cannot read property 'length' of undefined"
    },
    {
        language: "Python", 
        code: `numbers = [1, 2, 3]
print(numbers[3])`,
        error: "IndexError: list index out of range"
    },
    {
        language: "JavaScript",
        code: `function greet(name) {
    return 'Hello, ' + name;
}
greet();`,
        error: "Uncaught TypeError: name is undefined"
    },
    {
        language: "Python",
        code: `total = 10
total += "5"`,
        error: "TypeError: unsupported operand type(s) for +=: 'int' and 'str'"
    }
];