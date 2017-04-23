export function getAllNewsSources() {
  const newsSources = [
    {
      name: 'CNN',
      id: 'cnn'
    },
    {
      name: 'BBC',
      id: 'bbc'
    },
    {
      name: 'Al Jazeera',
      id: 'aljazeera'
    },
    {
      name: 'TechCrunch',
      id: 'techcrunch'
    },
    {
      name: 'The International Daily Tribune',
      id: 'daily-tribune'
    }
  ];
  return newsSources;
}

export function getAvailableSortForNewsSource(source) {
  let availableSortTypes = [];
  switch(source) {
    case 'cnn':
      availableSortTypes = ['top'];
      break;
    
    case 'bbc':
      availableSortTypes = ['top', 'popular'];
      break;

    case 'aljazeera':
      availableSortTypes = ['popular'];
      break;

    default:
      availableSortTypes = ['latest'];
  }

  return availableSortTypes;
}
