const f1 = document.querySelector('form');
f1.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#Weight').value);
  const result = document.querySelector('#result');
  result.innerHTML = '';
  
  if (isNaN(height) || height <= 0) {
    result.innerHTML = ' Please provide a valid height.';
  } 
  else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = ' Please provide a valid weight.';
  } 
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = '';
    
    if (bmi < 18.6) category = 'Under Weight';
    else if (bmi >= 18.6 && bmi <= 24.9) category = 'You are in Normal Range GOOD !';
    else category = ' you are overweight exercise needed ';
    result.innerHTML = `Your BMI is ${bmi} (${category})`;
    }
});
