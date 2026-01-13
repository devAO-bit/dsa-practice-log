function generatePascal(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1);

        // First and last element are always 1
        row[0] = 1;
        row[i] = 1;

        // Fill middle elements
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
}

const n = 5;
console.log(generatePascal(5))