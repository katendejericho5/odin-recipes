const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

// Simple arithmetic expression evaluator
function calculate() {
    const expression = display.value;

    try {
        const result = computeExpression(expression);
        display.value = result;
    } catch (error) {
        console.error('Error in calculation:', error.message);
        display.value = 'Error';
    }
}

// Safe expression evaluator (handles +, -, *, /, decimals)
function computeExpression(expr) {
    const tokens = expr.match(/(\d+(\.\d+)?|[+\-*/])/g);

    if (!tokens || tokens.length === 0) {
        throw new Error("Invalid expression");
    }

    // First pass: handle multiplication and division
    let stack = [];
    let i = 0;
    while (i < tokens.length) {
        let token = tokens[i];
        if (token === '*' || token === '/') {
            const prev = parseFloat(stack.pop());
            const next = parseFloat(tokens[++i]);
            if (token === '*') stack.push(prev * next);
            else {
                if (next === 0) throw new Error("Division by zero");
                stack.push(prev / next);
            }
        } else {
            stack.push(token);
        }
        i++;
    }

    // Second pass: handle addition and subtraction
    let result = parseFloat(stack[0]);
    for (let j = 1; j < stack.length; j += 2) {
        const operator = stack[j];
        const number = parseFloat(stack[j + 1]);
        if (operator === '+') result += number;
        else if (operator === '-') result -= number;
    }

    return result;
}
