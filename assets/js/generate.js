// Function to prompt user to enter password settings and generate password.

function generatePassword() {
  var options = ['abcdef', 'ABCDEF', '123456789', '!@#$%^&*()'];
  var combined = '';
  var password = '';

  var includeLowercase = confirm('Click OK to include lower-case letters.');
  var includeUppercase = confirm('Click OK to include upper-case letters.');
  var includeNumbers = confirm('Click OK to include numbers in your password.');
  var includeSpecials = confirm('Click OK to include special characters.');
  var stringAmount = prompt('How many characters would you like your password to be?');

  if (includeLowercase) {
    combined += options[0];
  }

  if (includeUppercase) {
    combined += options[1];
  }

  if (includeNumbers) {
    combined += options[2];
  }

  if (includeSpecials) {
    combined += options[3];
  }

  if (stringAmount < 1) {
    alert('You must enter a valid number 1 or more');
    stringAmount = prompt('How many characters would you like?');
  }

  if (isNaN(stringAmount)) {
    alert('You must enter a number');
    stringAmount = prompt('How many characters would you like?');
  }

  for (var count = 0; count < stringAmount; count++) {
    var random = Math.random();
    var index = Math.floor(random * combined.length);

    password += combined[index];;
  }
  return password;
}