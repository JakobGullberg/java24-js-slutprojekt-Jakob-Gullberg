

    //Sorterar en lista av filmer eller personer baserat på valt kriterium.
    // Används för att kunna sortera efter titel (stigande/fallande) eller popularitet.

    export function sortItems(items, sortBy, type = 'movie') {
    const sorted = [...items];
  
    switch (sortBy) {   
      case 'title-asc': // Sortering: Titel A till Ö

        sorted.sort((a, b) => {
          const titleA = (a.title || a.name).toLowerCase();
          const titleB = (b.title || b.name).toLowerCase();
          return titleA.localeCompare(titleB);
        });
        break;


      case 'title-desc': // Sortering: Titel Ö till A

        sorted.sort((a, b) => {
          const titleA = (a.title || a.name).toLowerCase();
          const titleB = (b.title || b.name).toLowerCase();
          return titleB.localeCompare(titleA);
        });
        break;

        
      case 'popularity-asc': // Sortering: Popularitet stigande
        sorted.sort((a, b) => a.popularity - b.popularity);
        break;

      case 'popularity-desc': // Sortering: Popularitet stigande
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;

        // Om ingen matchning hittas, returnera osorterad lista (vilket är förinställt val)
      default:
        break; 
    }
  
    return sorted;
  }
  