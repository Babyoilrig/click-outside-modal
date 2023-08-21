console.log('It Works!')

//Selecting card buttons
const cardButtons = document.querySelectorAll('.card button');
// console.log(cardButtons);

function handleCardButtonClick() {
    const button = event.currentTarget;
    //Finding the closest card to the button
    const card = button.closest('.card');
    //Grabbing the image src
    const imgSrc = card.querySelector('img').src;
    //Grabbing the card description
    const desc = card.dataset.description;
    console.log(desc);

}
//Looping over the card buttons and adding an event listener
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));