// Utilizamos un bucle for para recorrer todos los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    // Si el número es múltiplo de 3 y de 5, imprimimos "fizzbuzz"
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    // Si el número es múltiplo de 3 pero no de 5, imprimimos "fizz"
    } else if (i % 3 === 0) {
      console.log("fizz");
    // Si el número es múltiplo de 5 pero no de 3, imprimimos "buzz"
    } else if (i % 5 === 0) {
      console.log("buzz");
    // Si el número no es múltiplo de 3 ni de 5, imprimimos el número
    } else {
      console.log(i);
    }
  }
