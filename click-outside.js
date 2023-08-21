console.log('It Works!')

//Selecting card buttons
const cardButtons = document.querySelectorAll('.card button');
// console.log(cardButtons);

//Selecting modal
const modalInner = document.querySelector('.modal-inner');
// console.log(modalInner);

function handleCardButtonClick() {
    const button = event.currentTarget;
    //Finding the closest card to the button
    const card = button.closest('.card');
    //Grabbing the image src
    const imgSrc = card.querySelector('img').src;
    //Grabbing the card description
    const desc = card.dataset.description;
    // console.log(desc);
    const name = card.querySelector('h2').textContent;
    //Populate the modal with the new info
    modalInner.innerHTML = 
    `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
    `
}
//Looping over the card buttons and adding an event listener
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));