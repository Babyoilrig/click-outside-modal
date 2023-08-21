console.log('It Works!')

//Selecting card buttons
const cardButtons = document.querySelectorAll('.card button');
// console.log(cardButtons);

function handleCardButtonClick() {
    const button = event.currentTarget;
    const card = button.closest('.card');
    //Grab the image src
    const imgSrc = card.querySelector('img').src;
    console.log(imgSrc);
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));