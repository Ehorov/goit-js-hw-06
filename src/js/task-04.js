const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const onValue = document.querySelector('#value');

let counterValue = 0;

const clickDecrement = () => {
  counterValue -= 1;
  onValue.textContent = counterValue;
};

const clickIncrement = () => {
  counterValue += 1;
  onValue.textContent = counterValue;
};

decrement.addEventListener('click', clickDecrement);
increment.addEventListener('click', clickIncrement);
