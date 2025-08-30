module.exports = function towelSort(matrix) {
  const result = [];
  if (!matrix) return result;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const columnIdx = i % 2 === 0 ? j : matrix[i].length - j - 1;

      result.push(matrix[i][columnIdx]);
    }
  }
  return result;
};
