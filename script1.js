let currentValue = '';

function addToDisplay(value) {
  currentValue += value;
  document.getElementById('result').value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  document.getElementById('result').value = '';
}

function deleteButton() {
  currentValue = currentValue.slice(0, -1);
  document.getElementById('result').value = currentValue;
}

function calculate(operator) {
  if (operator === '=') {
    try {
      // 1. Calculate the result
      let result = eval(currentValue);
      
      // 2. Display both: "Expression = Result"
      document.getElementById('result').value = `${currentValue} = ${result}`;
      
      // 3. Update currentValue to the result so the user can keep calculating
      currentValue = result.toString();
    } catch (error) {
      alert('Invalid expression');
      clearDisplay();
    }
  } else {
    if (currentValue === '') {
      alert('Please enter a number');
      return;
    }
    currentValue += operator;
    document.getElementById('result').value = currentValue;
  }
}
