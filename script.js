const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');
const errorMsg = document.getElementById('errorMsg');
const strengthMsg = document.getElementById('strengthMsg');

const uppercaseBox = document.getElementById('uppercase');
const lowercaseBox = document.getElementById('lowercase');
const numbersBox = document.getElementById('numbers');
const symbolsBox = document.getElementById('symbols');

const CHAR_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  errorMsg.textContent = '';
  strengthMsg.textContent = '';

  const length = parseInt(lengthSlider.value, 10);
  const options = [];
  if (uppercaseBox.checked) options.push('uppercase');
  if (lowercaseBox.checked) options.push('lowercase');
  if (numbersBox.checked) options.push('numbers');
  if (symbolsBox.checked) options.push('symbols');

  if (options.length === 0) {
    errorMsg.textContent = 'Please select at least one character type.';
    passwordField.value = '';
    return;
  }

  if (isNaN(length) || length < 4 || length > 32) {
    errorMsg.textContent = 'Password length must be between 4 and 32.';
    return;
  }

  let allChars = '';
  options.forEach(opt => allChars += CHAR_SETS[opt]);

  let passwordChars = [];
  options.forEach(opt => {
    passwordChars.push(getRandomChar(CHAR_SETS[opt]));
  });

  for (let i = passwordChars.length; i < length; i++) {
    passwordChars.push(getRandomChar(allChars));
  }

  passwordChars = shuffleArray(passwordChars);

  const finalPassword = passwordChars.join('');
  passwordField.value = finalPassword;

  showStrength(finalPassword, options.length);
}

function getRandomChar(charset) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showStrength(password, typesUsed) {
  let strength = 'Weak';
  let color = '#c0392b';

  if (password.length >= 12 && typesUsed >= 3) {
    strength = 'Strong';
    color = '#2e7d32';
  } else if (password.length >= 8 && typesUsed >= 2) {
    strength = 'Medium';
    color = '#e67e22';
  }

  strengthMsg.textContent = `Strength: ${strength}`;
  strengthMsg.style.color = color;
}

copyBtn.addEventListener('click', () => {
  if (!passwordField.value) {
    copyMsg.textContent = 'Nothing to copy yet!';
    setTimeout(() => copyMsg.textContent = '', 1500);
    return;
  }
  navigator.clipboard.writeText(passwordField.value).then(() => {
    copyMsg.textContent = 'Copied to clipboard!';
    setTimeout(() => copyMsg.textContent = '', 1500);
  });
});

generateBtn.addEventListener('click', generatePassword);

window.addEventListener('load', generatePassword);
