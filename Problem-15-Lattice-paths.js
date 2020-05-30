function latticePaths(gridSize) {
    let paths = 1;
    let i = 0;
    while (i < gridSize) {
      paths *= (2 * gridSize) - i;
      paths /= i + 1;
      i++;
    }
    return paths;
  }
  
  console.log(latticePaths(4));  