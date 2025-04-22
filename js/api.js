// js/api.js

const API_KEY = 'DIN_API_KEY_HÄR'; // Ersätt med din egna
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies() {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results.slice(0, 10); // Endast top 10
  } catch (err) {
    console.error('Fel vid hämtning av populära filmer:', err);
    return [];
  }
}
