function generatePassword() {
  var options = ['abcdef', 'ABCDEF', '123456789', '!@#$%^&*()'];
  var combined = '';
  var password = '';

  var wantsLowercase = confirm('Click OK to include lower-case letters.');
  var wantsUppercase = confirm('Click OK to include upper-case letters.');
  var wantsNumbers = confirm('Click OK to include numbers in your password.');
  var wantsSpecials = confirm('Click OK to include special characters.');
  var passwordLength = prompt('How many characters would you like your password to be?');

  if (wantsLowercase) {
    combined += options[0];
  }

  if (wantsUppercase) {
    combined += options[1];
  }

  if (wantsNumbers) {
    combined += options[2];
  }

  if (wantsSpecials) {
    combined += options[3];
  }

  if (passwordLength < 1) {
    alert('You must enter a valid number 1 or more');
    passwordLength = prompt('How many characters would you like?');
  }

  if (isNaN(passwordLength)) {
    alert('You must enter a number');
    passwordLength = prompt('How many characters would you like?');
  }

  for (var count = 0; count < passwordLength; count++) {
    var random = Math.random();
    var index = Math.floor(random * combined.length);

    password += combined[index];;
  }
  return password;
}