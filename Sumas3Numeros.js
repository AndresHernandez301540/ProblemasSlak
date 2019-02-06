function sumar(numero) {
  var numeros = [12, 27, 9, 3, 21, 6, 18, 24, 15];
  var sumas = [];

  for (var i = 0; i < numeros.length; i++) {
    for (var j = i + 1; j < numeros.length; j++) {
      for (var k = j + 1; k < numeros.length; k++) {
        if (numeros[i] + numeros[j] + numeros[k] == numero) {
          sumas.push([numeros[i], numeros[j], numeros[k]]);
        }
      }

    }
  }
  return sumas;
}
sumar(30);
