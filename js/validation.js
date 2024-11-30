let phoneRegex = /[a-z]/
let phoneNumber = /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

const stateAbbreviations = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

let form=null;
let successMsg=null;

function initValidation(formId, successId){

    form = document.getElementById(formId);
    successMsg = document.getElementById(successId);

    let inputs = document.querySelectorAll("input");
    for (input of inputs){
        input.addEventListener("change", inputChanged);
    }
    form.addEventListener("submit", submitForm );
}

function inputChanged(ev){
    let el = ev.currentTarget;
    validateForm();
    el.classList.add("was-validated");
}

function submitForm(ev) {
    console.log("submitForm called");
    ev.preventDefault(); // Prevent navigation to the form's action URL
    ev.stopPropagation(); // Stop further propagation of the event
  
    validateForm();
  
    if (!form.checkValidity()) {
      // If the form is invalid, highlight errors
      document.querySelectorAll("input").forEach((input) => {
        input.classList.add("was-validated");
      });
    } else {
      // If the form is valid, show success message and hide form
      form.style.display = "none";
      successMsg.style.display = "block";
    }
}
  

// function submitForm(ev) {
//     console.log("in submit");
//     let form=ev.currentTarget;

//     ev.preventDefault();
//     ev.stopPropagation();
//     validateForm();

//     if (!form.checkValidity()) {
//         let inputs = document.querySelectorAll("input");
//         for (let input of inputs) {
//           input.classList.add('was-validated');
//         }
//     } else {
//         // Hide the form and show the success message
//         form.style.display = 'none';
//         successMsg.style.display = 'block';
//     }
// }

function validateForm() {

    checkRequired("first-name", "First Name is Required");
    checkRequired("last-name", "Last Name is Required");
    checkRequired("address", "Address is Required");
    checkRequired("city", "City is Required");
    
    if(checkRequired("state", "State is Required")){
      validateState("state", "Not a valid State, enter two digit code e.g., UT");
    }
   
    if (checkRequired("email", "Email Address is required")) {
      checkFormat("email", "email format is bad", emailRegex)
    }
    if (checkRequired("zip", "Zip Code is Required")) {
      checkFormat("zip", `malformed zip-code, please use either "#####", or "#####-#### format.`, zipCodeRegex)
    }
    if (checkRequired("phone", "Phone is required")) {
      checkFormat("phone", "phone format is bad", phoneRegex)
    }
    checkRequired("newspaper", "you must select at least one!");
}

function validateState(id, msg){
    let el = document.getElementById(id);
    let valid = false;
    let value = el.value.toUpperCase(); // Convert to uppercase
    valid = stateAbbreviations.includes(value); 
    setElementValidity(id, valid, msg);
}  

function checkFormat(id, msg, regex) {
    let el = document.getElementById(id);
    let value = el.value.trim(); // Get the value and trim whitespace
    let valid = regex.test(value); // Test against regex
    setElementValidity(id, valid, msg);
    return valid;
}

function checkRequired(id, message) {
    let el = document.getElementById(id);
    let valid = false;
    let type = el.type;
  
    switch (type) {
      case 'text':
      case 'password':
        valid = el.value.trim() !== ''; // Check if not empty
        break;
  
      case 'checkbox':
      case 'radio':
        let name = el.name; // Get the shared name of checkboxes/radios
        let elements = document.querySelectorAll(`[name="${name}"]`);
        valid = Array.from(elements).some((elem) => elem.checked); // Check if any is checked
        break;
    }
  
    setElementValidity(id, valid, message);
    return valid;
  }
  
  function setElementValidity(id, valid, message) {
    let el = document.getElementById(id);
    let errorDiv = el.nextElementSibling; // Assuming error div is next to the input
  
    if (valid) {
      el.setCustomValidity(''); // Clear error
      if (errorDiv) errorDiv.textContent = ''; // Remove message
    } else {
      el.setCustomValidity(message); // Set error message
      if (errorDiv) errorDiv.textContent = message; // Display message
    }
  }
