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
      currentValue = eval(currentValue).toString();
      document.getElementById('result').value = currentValue;
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


