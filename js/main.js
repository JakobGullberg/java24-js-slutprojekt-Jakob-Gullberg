// js/main.js

import { fetchPopularMovies } from './api.js';
import { showMovies } from './dom.js';

document.getElementById('popular-btn').addEventListener('click', async () => {
  const movies = await fetchPopularMovies();
  showMovies(movies);
});
