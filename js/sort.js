export function sortItems(items, sortBy, type = 'movie') {
    const sorted = [...items];
  
    switch (sortBy) {
      case 'title-asc':
        sorted.sort((a, b) => {
          const titleA = (a.title || a.name).toLowerCase();
          const titleB = (b.title || b.name).toLowerCase();
          return titleA.localeCompare(titleB);
        });
        break;
      case 'title-desc':
        sorted.sort((a, b) => {
          const titleA = (a.title || a.name).toLowerCase();
          const titleB = (b.title || b.name).toLowerCase();
          return titleB.localeCompare(titleA);
        });
        break;
      case 'popularity-asc':
        sorted.sort((a, b) => a.popularity - b.popularity);
        break;
      case 'popularity-desc':
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        break; // return original sortering
    }
  
    return sorted;
  }
  