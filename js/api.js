
const API_KEY = '2a1c27881bd6c1367bd306a5ffe3cfe1';
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
export async function fetchTopRatedMovies() {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.results.slice(0, 10); // Endast top 10
    } catch (err) {
      console.error('Fel vid hämtning av top rated-filmer:', err);
      return [];
    }
  }

  // Hämtar detaljer om specifikt sökt titel av film

  export async function searchMovies(query) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=sv-SE&query=${encodeURIComponent(query)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.results; // Returnerar alla matchande filmer
    } catch (err) {
      console.error('Fel vid filmsökning:', err);
      return [];
    }
  }

    // Hämtar detaljer om en person
  
  export async function searchPersons(query) {
    const url = `${BASE_URL}/search/person?api_key=${API_KEY}&language=sv-SE&query=${encodeURIComponent(query)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.results; // Returnerar alla matchande personer
    } catch (err) {
      console.error('Fel vid personsökning:', err);
      return [];
    }
  }

  
    // Hämtar detaljerad information om en viss film, inklusive trailers (videos).

    export async function fetchMovieDetails(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=sv-SE&append_to_response=videos`;
    try {
      const res = await fetch(url);
      return await res.json(); // Returnerar hela filmobjektet inkl. trailers
    } catch (err) {
      console.error('Fel vid hämtning av filmdetaljer:', err);
      return null;
    }
  }
  
  
  
