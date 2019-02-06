function sumar(numero) {
  var numeros = [12, 27, 9, 3, 21, 6, 18, 24];
  var sumas = [];

  for (var i = 0; i < numeros.length; i++) {
    for (var j = i + 1; j < numeros.length; j++) {
        if (numeros[i] + 15 + numeros[j] == numero) {
          sumas.push([numeros[i], 15, numeros[j]]);
        }
    }
  }
  return sumas;
}
sumar(45);
