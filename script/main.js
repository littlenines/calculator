const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = calculator.querySelector('.calculator-display');
keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calculator.dataset;

    // NUMBER KEY
    if (type === 'number') {
        if (displayValue === '0' || previousKeyType === 'operator') {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }
    }

    // OPERATOR KEY
    if (type === 'operator') {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        key.dataset.state = "selected";
        operatorKeys.forEach(el => el.dataset.state = '')

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if (type === 'equal') {
        //perform calculation
        const firstNumber = calculator.dataset.firstNumber
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue
        console.log(firstNumber, operator, secondNumber);

        display.textContent = calculate(firstNumber, operator, secondNumber);
    }

    if (type === 'clear') {
        display.textContent = '0';
        delete calculator.dataset.firstNumber;
        delete calculator.dataset.operator;
    }
    calculator.dataset.previousKeyType = type;
})

function calculate(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber) 
    secondNumber = parseInt(secondNumber)
    let result = '';
    if (operator === 'plus')  return firstNumber + secondNumber;
    if (operator === 'minus') return firstNumber - secondNumber;
    if (operator === 'times') return firstNumber * secondNumber;
    if (operator === 'divide') return firstNumber / secondNumber;
}