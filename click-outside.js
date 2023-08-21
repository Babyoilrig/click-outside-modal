console.log('It Works!')

//Selecting card buttons
const cardButtons = document.querySelectorAll('.card button');
// console.log(cardButtons);

function handleCardButtonClick() {
    console.log('YA CLICKED IT!')
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));