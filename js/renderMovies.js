
import { showModal } from './modal.js';
import { fetchMovieDetails } from './api.js';

// Visar en lista med filmer i DOM:en.
// Varje film renderas som ett kort med bild, titel, releasedatum och popularitet.

export function renderMovies(movies) {
  const container = document.getElementById('movie-list');
  container.innerHTML = '';


// Itererar över varje film och skapar ett element i DOM:en
  movies.forEach((movie) => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');


    // Sätter in filmens bild, titel, releasedatum och populariteten
    movieEl.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
      <h2>${movie.title}</h2>
      <p>Release: ${movie.release_date}</p>
      <p>Popularity: ${movie.popularity}</p>
    `;

    // Gör så det går att klicka på filmkortet för att visa mer detaljer i en modal
    movieEl.addEventListener('click', async () => {
      const details = await fetchMovieDetails(movie.id); // Hämtar filmens detaljer och trailer
      if (!details) return;

      
     // Bygger genrelistan
      const genres = details.genres.map(g => g.name).join(', ') || 'Okänt';

    // Letar efter YouTube-trailer om den finns och tillåter dem att spelas i fullscreen.
      const trailer = details.videos.results.find(v => v.site === 'YouTube' && v.type === 'Trailer');
      const trailerEmbed = trailer
        ? `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${trailer.key}"
                  frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>` 
        : '<p>Ingen trailer tillgänglig.</p>'; //// Om trailer finns, skapas en iframe som bäddar in videon. Annars visas meddelande


        // Innehållet som ska visas i modalen
      const content = `
        <h2>${details.title}</h2>
        <p><strong>Genre:</strong> ${genres}</p>
        <p><strong>Releasedatum:</strong> ${details.release_date}</p>
        <p><strong>Popularitet:</strong> ${details.popularity}</p>
        <p><strong>Beskrivning:</strong> ${details.overview || 'Ingen beskrivning tillgänglig.'}</p>
        <h3>Trailer</h3>
        ${trailerEmbed}
      `;

      showModal(content); // Visar modalens innehåll
    });

    container.appendChild(movieEl); // Lägger till filmkortet i DOM:en
  });
}
