const form = document.getElementById('calculator-form');
const result = document.getElementById('result');
const maturityAmountSpan = document.getElementById('maturity-amount');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const principal = parseFloat(document.getElementById('principal').value);
  const interest = parseFloat(document.getElementById('interest').value) / 100;
  const years = parseFloat(document.getElementById('years').value);

  const maturityAmount = principal * (1 + interest) ** years;

  maturityAmountSpan.textContent = maturityAmount.toFixed(2);
  result.style.display = 'block';
});
