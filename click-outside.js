console.log('It Works!')

//Selecting card buttons
const cardButtons = document.querySelectorAll('.card button');
// console.log(cardButtons);

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));