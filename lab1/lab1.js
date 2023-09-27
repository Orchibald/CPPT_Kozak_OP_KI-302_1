function generateMatrix() {
  const inputRows = prompt('Введіть розмір квадратної матриці:');
  const nRows = parseInt(inputRows);

  if (isNaN(nRows) || nRows <= 0) {
    alert('Некоректний розмір матриці.');
    return;
  }

  const filler = prompt('Введіть символ-заповнювач:');

  if (filler.length !== 1) {
    alert('Символ-заповнювач введено невірно.');
    return;
  }

  const arr = [];

  for (let i = 0; i < nRows; i++) {
    let row = '';

    for (let k = nRows; k > i; k--) {
      row += '\t';
    }

    arr[i] = [];

    for (let j = 0; j < i; j++) {
      arr[i][j] = filler;
      row += arr[i][j] + '\t';
    }
  }

  console.log(arr);
}

generateMatrix();