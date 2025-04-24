


// Hämtar de element som behövs för modalen

const modal = document.getElementById('details-modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.getElementById('modal-close');

// Visar modalen med det givna HTML-innehållet
export function showModal(contentHTML) {
  modalBody.innerHTML = contentHTML; // Fyller modalens kropp med innehåll
  modal.classList.remove('hidden');  // Visar modalen genom att ta bort 'hidden' klassen
}

// Sätter upp event för att stänga modalen
export function setupModalEvents() {
  closeButton.addEventListener('click', () => modal.classList.add('hidden')); // Stänger modal när man klickar på 'X'
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden'); // Stänger modal om man klickar utanför den
    }
  });
}
