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
        console.log(key);
    }
    calculator.dataset.previousKeyType = type;
})