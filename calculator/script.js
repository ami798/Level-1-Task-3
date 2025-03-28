document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelector('.buttons');
    const display = document.querySelector('#display');

    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const value = e.target.innerText;

            if (value >= '0' && value <= '9') {
                currentInput += value;
                display.innerText = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.innerText = '';
            } else if (value === '=') {
                if (operator && previousInput) {
                    currentInput = String(eval(`${previousInput}${operator}${currentInput}`));
                    display.innerText = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            }
        }
    });
});
