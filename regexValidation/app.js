const validatePostalCode = postalCode => {
  const postalCodeRegex = /^[1-9][0-9]{4}$/;
  return postalCodeRegex.test(postalCode.toUpperCase());  
}

const inputPostalCode = document.querySelector("#input-postal-code");

inputPostalCode.addEventListener("keyup", (e) => {
  e.preventDefault();
  const postalCode = e.target.value;
  if (validatePostalCode(postalCode)) {
    inputPostalCode.classList.remove('is-invalid');
    inputPostalCode.classList.add('is-valid');
  }
  else {
    inputPostalCode.classList.remove('is-valid');
    inputPostalCode.classList.add('is-invalid');
  }
});

// IBAN-Validierung 
// const ibanGermany = /^DE[0-9]{20}$/;


// E-Mail-Validierung 
// const emailAdress = /^[A-Z0-9+_.-]+@[A-Z0-9+.-]+$/;
