const validateBirthdate = dateValue => {
  const oneDayInMs = 24 * 60 * 60 * 1000;
  const validAgeInMs = 6 * 365 * oneDayInMs; 

  const now = new Date();
  const currentYear = now.getFullYear();
  const deadline = new Date(currentYear, 8, 30);

  if (now > deadline) {
    deadline.setFullYear(currentYear + 1);
  }

  if (dateValue < deadline - validAgeInMs) return true;
  else return false;
}

const registrationForm = document.querySelector("#registrationForm");
const inputBirthDate = document.querySelector("#birthDate");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateValue = new Date(e.target.birthDate.value);
  if (validateBirthdate(dateValue)) {
    inputBirthDate.classList.remove('is-invalid');
    inputBirthDate.classList.add('is-valid');
  }
  else {
    inputBirthDate.classList.remove('is-valid');
    inputBirthDate.classList.add('is-invalid');
  }
});
