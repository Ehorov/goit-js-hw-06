const form = document.querySelector('.login-form');
let message = '';

form.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    message = alert('All fields must be completed!');
  }

  console.log(formData);
  form.reset();
}
