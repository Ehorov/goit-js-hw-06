const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
const createList = elementList => {
  return elementList.map(ingredientsName => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = ingredientsName;
    ingredientsItem.classList.add('item');
    return ingredientsItem;
  });
};

const ingredientsList = createList(ingredients);

ingredientsRef.append(...ingredientsList);
console.log(ingredientsRef);
