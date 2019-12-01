const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    // closest() gets the closest card div, which is the parent el
    const card = button.closest('.card');
    // Grab the image source
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // Populate the modal with the new info
    modalInner.innerHTML = `
        <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}" />
        <p>${desc}</p>
    `;
    // Show the modal
    modalOuter.classList.add('open');
}

// Loop through each of the buttons when clicked and handleCardButtonClick function
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

// Close the modal function
function closeModal() {
    modalOuter.classList.remove('open');
}

// When the outerModal div is clicked, close the modal
modalOuter.addEventListener('click', (event) => {
    const isOutside = !event.target.closest('.modal-inner');
    if(isOutside) {
        closeModal();
    }
});

// Remove the open class from modalOuter to close the modal using escape key
window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        closeModal();
    }
});