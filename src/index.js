// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix === undefined) return arr;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIdx = i % 2 === 0 ? j : matrix[i].length - j - 1;
            arr.push(matrix[i][columnIdx]);
        }
    }
    return arr;
};
