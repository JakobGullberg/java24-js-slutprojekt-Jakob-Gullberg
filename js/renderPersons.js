

// Funktion som visar en lista med personer (skådespelare, regissörer etc.) från en sökning.
// Varje person visas med bild, namn, popularitet och vad de är kända för.
export function renderPersons(persons) {
    const container = document.getElementById('movie-list');
    container.innerHTML = '';
  
    if (persons.length === 0) {
      container.innerHTML = '<p>Inga resultat hittades.</p>'; // Om inga personer hittades, visa meddelande
      return;
    }
  
    persons.forEach((person) => { // Skapar och visar varje persons kort i DOM:en
      const el = document.createElement('div');
      el.classList.add('movie');
  
      // Skapar en lista av produktioner personen är känd för
      const knownFor = person.known_for.map(item => {
        const type = item.media_type === 'movie' ? 'Film' : 'TV';
        return `${type}: ${item.title || item.name}`;
      }).join('<br>');

      // Renderar personens kort med namn, bild och vad personen är känd för
      el.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${person.profile_path}" alt="${person.name}" />
        <h2>${person.name}</h2>
        <p>Popularitet: ${person.popularity}</p>
        <p>Känd för: ${person.known_for_department}</p>
        <p>${knownFor}</p>
      `;
  
      container.appendChild(el);
    });
  } 
  