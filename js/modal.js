

const modal = document.getElementById('details-modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.getElementById('modal-close');


export function showModal(contentHTML) {
  modalBody.innerHTML = contentHTML; // Fyller modalens kropp med innehåll
  modal.classList.remove('hidden'); 
  modal.classList.add('visible');    // Lägger till 'visible' för att visa modalen med en övergång
}

// Funktion för att stänga modalen med krysset i hörnet
export function setupModalEvents() {
  closeButton.addEventListener('click', () => {
    modal.classList.remove('visible'); 
    modal.classList.add('hidden');  
  });
  
  // Stänger modalen om du trycker utanför den.
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('visible');
      modal.classList.add('hidden');     
    }
  });
}
