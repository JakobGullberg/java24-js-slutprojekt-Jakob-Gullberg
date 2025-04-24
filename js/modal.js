

// Hämtar de element som behövs för modalen
const modal = document.getElementById('details-modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.getElementById('modal-close');

// Visar modalen med det givna HTML-innehållet
export function showModal(contentHTML) {
  modalBody.innerHTML = contentHTML; // Fyller modalens kropp med innehåll
  modal.classList.remove('hidden');  // Tar bort 'hidden' klassen
  modal.classList.add('visible');    // Lägger till 'visible' för att visa modalen med en övergång
}

export function setupModalEvents() {
  closeButton.addEventListener('click', () => {
    modal.classList.remove('visible'); // Tar bort 'visible' när modalen stängs
    modal.classList.add('hidden');     // Lägger till 'hidden' för att dölja modalen
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('visible'); // Stänger modal om man klickar utanför den
      modal.classList.add('hidden');     // Lägger till 'hidden' för att dölja modalen
    }
  });
}
