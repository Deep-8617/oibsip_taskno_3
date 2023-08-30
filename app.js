const convertBtn = document.getElementById('convertBtn');
const temperatureInput = document.getElementById('temperatureInput');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    resultElement.textContent = 'Please enter a valid temperature.';
    return;
  }

  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  if (fromUnit === toUnit) {
    resultElement.textContent = 'Conversion units must be different.';
    return;
  }

  let convertedTemperature;

  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = temperature + 273.15;
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      convertedTemperature = (temperature - 32) * 5/9;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      convertedTemperature = temperature - 273.15;
    } else if (toUnit === 'fahrenheit') {
      convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    }
  }

  resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
});
