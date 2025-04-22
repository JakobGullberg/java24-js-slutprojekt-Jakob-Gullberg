// js/dom.js

export function showMovies(movies) {
    const container = document.getElementById('movie-list');
    container.innerHTML = ''; // Töm tidigare innehåll
  
    movies.forEach((movie) => {
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
  
      movieEl.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
        <h2>${movie.title}</h2>
        <p>Release: ${movie.release_date}</p>
        <p>Popularity: ${movie.popularity}</p>
      `;
  
      container.appendChild(movieEl);
    });
  }
  