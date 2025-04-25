

import { setupModalEvents } from './modal.js';
import { fetchPopularMovies, fetchTopRatedMovies, searchMovies, searchPersons } from './api.js';
import { renderMovies } from './renderMovies.js';
import { renderPersons } from './renderPersons.js';
import { sortItems } from './sort.js';
setupModalEvents();

  
  let currentItems = [];            // Den nuvarande listan av filmer/personer som visas
  let currentType = 'movie';        // Typen av data: 'movie' eller 'person'
  let currentView = 'default';      // Aktuellt visningsläge: 'popular', 'top-rated' eller 'search'
  
 
  const popularBtn = document.getElementById('popular-btn');
  const topRatedBtn = document.getElementById('top-rated-btn');
  const searchForm = document.getElementById('search-form');
  const sortSelect = document.getElementById('sort-select');
  
  // När användaren klickar på "Popular"-knappen: hämtas och visar populära filmer
  popularBtn.addEventListener('click', async () => {
    currentItems = await fetchPopularMovies();
    currentType = 'movie';
    currentView = 'popular';
    renderMovies(currentItems); 
  });
  
  // När användaren klickar på "Top Rated"-knappen: hämtas och visa topprankade filmer
  topRatedBtn.addEventListener('click', async () => {
    currentItems = await fetchTopRatedMovies();
    currentType = 'movie';
    currentView = 'top-rated';
    renderMovies(currentItems);
  });
  
  
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Hindrar att sidan laddas om
  
    const query = document.getElementById('search-input').value.trim(); // Hämtar söksträngen och trimmar den ifall det finns mellanslag etc
    const type = document.getElementById('search-type').value;          // Kontrollera om det är film eller person
  
    if (!query) {
      alert('Skriv in något att söka efter!');
      return;
    }
  
    // Hämtar resultat beroende på typ (film/person) och visar resultatet
    if (type === 'movie') {
      currentItems = await searchMovies(query);
      currentType = 'movie';
      currentView = 'search';
      renderMovies(currentItems);
    } else {
      currentItems = await searchPersons(query);
      currentType = 'person';
      currentView = 'search';
      renderPersons(currentItems);
    }
  });
  
  // När användaren ändrar sorteringsvalet
  sortSelect.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    const sorted = sortItems(currentItems, sortBy, currentType); // Sorterar aktuella objekt
  
    
    if (currentType === 'movie') {
      if (currentView === 'search') {
        renderMovies(sorted); // Visar sorterade filmer från en sökning
      } else {
        renderMovies(sorted); // Visar sorterade filmer från t.ex. "Populära" eller "Topprankade"

      }
    } else {
      renderPersons(sorted); // Visar sorterade resultat för personer (t.ex. om man sökt på en skådespelare)
    }
  });
  