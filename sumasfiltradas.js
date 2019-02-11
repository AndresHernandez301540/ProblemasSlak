function sumar(numeros, numero) {
  let sumas = [], sumasfiltradas = [];
  let repeated = 1, counter = 0;
  let item;

  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      for (let k = j + 1; k < numeros.length; k++) {
        if (numeros[i] + numeros[j] + numeros[k] == numero) {
          sumas.push([numeros[i], numeros[j], numeros[k]]);
        }
      }
    }
  }
  for (let i = 0; i < sumas.length; i++) {
    for (let j = 0; j < sumas[i].length; j++) {
      if (sumas[i][j] == sumas[j][j]) {
        counter++;
      }
      if (repeated < counter) {
        repeated = counter;
        item = sumas[i][j];
      }
    }
  }
  for (let i = 0; i < sumas.length; i++) {
    for (let j = 0; j < sumas[i].length; j++) {
      if (sumas[i][j] == item) {
        sumasfiltradas.push(sumas[i]);
      }
    }


  }

  return sumasfiltradas;
}


let numeros = [12, 27, 9, 3, 21, 6, 18, 24, 15];
//let numeros = [20, 2, 4, 3, 7, 6, 8, 9, 1];
sumar(numeros, 45);
