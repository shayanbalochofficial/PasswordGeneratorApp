// Sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*().<>?/-_=+[]{}|;:,";

//
const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");

const lengthDisplay = document.getElementById("lengthvalue");

lengthSlider.addEventListener("input", () => {
  lengthDisplay.textContent = lengthSlider.value;
});

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", makePassword());

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

function makePassword() {
  const length = Number(lengthSlider.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert("Please select atleast one !!!");
    return;
  }

  const newPassword = createRandomPassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  );

  passwordInput.value = newPassword;
}

function createRandomPassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
) {
  let allCharacters = "";
}
