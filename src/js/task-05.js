const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  outputName.textContent = event.currentTarget.value.trim();

  if (inputName.value.trim() !== '') {
    outputName.textContent = event.currentTarget.value.trim();
  } else {
    outputName.textContent = 'Anonymous';
  }
});
