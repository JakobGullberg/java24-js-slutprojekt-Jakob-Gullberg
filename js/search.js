
import { showModal } from './modal.js';
import { fetchMovieDetails } from './api.js';


export function showSearchResults(movies) {
    const container = document.getElementById('movie-list');
    container.innerHTML = '';
  
    if (movies.length === 0) {
      container.innerHTML = '<p>Inga resultat hittades.</p>';
      return;
    }
  
    movies.forEach((movie) => {
      const el = document.createElement('div');
      el.classList.add('movie');
  
      el.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
        <h2>${movie.title}</h2>
        <p>Release: ${movie.release_date || 'Okänt datum'}</p>
        <p>Popularity: ${movie.popularity}</p>
        <p>${movie.overview}</p>
      `;

      // Använder mig av samma klickevent som i showMovies!
        el.addEventListener('click', async () => {
        const details = await fetchMovieDetails(movie.id);
        if (!details) return;
  
        const genres = details.genres.map(g => g.name).join(', ') || 'Okänt';
  
        const trailer = details.videos.results.find(
          (v) => v.site === 'YouTube' && v.type === 'Trailer'
        );
  
        const trailerEmbed = trailer
          ? `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${trailer.key}" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>`
          : '<p>Ingen trailer tillgänglig.</p>';
  
        const content = `
          <h2>${details.title}</h2>
          <p><strong>Genre:</strong> ${genres}</p>
          <p><strong>Releasedatum:</strong> ${details.release_date}</p>
          <p><strong>Popularitet:</strong> ${details.popularity}</p>
          <p><strong>Beskrivning:</strong> ${details.overview || 'Ingen beskrivning tillgänglig.'}</p>
          <h3>Trailer</h3>
          ${trailerEmbed}
        `;
  
        showModal(content);
      });
      container.appendChild(el);
    });
  }
  
  export function showPersons(persons) {
    const container = document.getElementById('movie-list');
    container.innerHTML = '';
  
    if (persons.length === 0) {
      container.innerHTML = '<p>Inga resultat hittades.</p>';
      return;
    }
  
    persons.forEach((person) => {
      const el = document.createElement('div');
      el.classList.add('movie');
  
      const knownFor = person.known_for.map(item => {
        const type = item.media_type === 'movie' ? 'Movie' : 'TV';
        return `${type}: ${item.title || item.name}`;
      }).join('<br>');
  
      el.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${person.profile_path}" alt="${person.name}" />
        <h2>${person.name}</h2>
        <p>Popularity: ${person.popularity}</p>
        <p>Känd för: ${person.known_for_department}</p>
        <p>${knownFor}</p>
      `;
      container.appendChild(el);
    });
  }
  