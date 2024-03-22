function riverSizes(matrix) {
    const visited = new Array(matrix.length).fill(false).map(() => new Array(matrix[0].length).fill(false));
    const sizes = [];
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (!visited[row][col] && matrix[row][col] === 1) {
          sizes.push(exploreSize(matrix, visited, row, col));
        }
      }
    }
  
    return sizes;
  }
  
  function exploreSize(matrix, visited, row, col) {
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      visited[row][col] ||
      matrix[row][col] === 0
    ) {
      return 0;
    }
  
    visited[row][col] = true;
    let size = 1;
  
    // Explore up
    size += exploreSize(matrix, visited, row - 1, col);
  
    // Explore down
    size += exploreSize(matrix, visited, row + 1, col);
  
    // Explore left
    size += exploreSize(matrix, visited, row, col - 1);
  
    // Explore right
    size += exploreSize(matrix, visited, row, col + 1);
  
    return size;
  }
  
  // Example usage
  const matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ];
  
  const riverSizesResult = riverSizes(matrix);
  console.log(riverSizesResult); // Output: [2, 1, 5, 2, 2]
  