const prompt = require("prompt-sync")();
const deposito = () => {
  while (true) {
    const cantidadDeposito = prompt("Ingrese la cantidad a depositar: ");
    const numeroCantidadDeposito = parseFloat(cantidadDeposito);

    if (isNaN(numeroCantidadDeposito) || numeroCantidadDeposito <= 0) {
      console.log("Ingrese un número válido por favor");
    } else {
      return numeroCantidadDeposito;
    }
  }
};

const obtenerNumeroDeLineas = () => {
  while (true) {
    const lineas = prompt(
      "Ingresa el numero de lineas para apostar entre(1-3): "
    );
    const numeroDeLineas = parseFloat(lineas);

    if (isNaN(numeroDeLineas) || numeroDeLineas <= 0 || numeroDeLineas > 3) {
      console.log("Ingrese un número de lineas válido por favor");
    } else {
      return numeroDeLineas;
    }
  }
};

const obtenerApuesta = (balance, lineas) => {
  while (true) {
    const apostar = prompt("Ingresa el total a apostar por linea: ");
    const numeroDeApuesta = parseFloat(apostar);

    if (
      isNaN(numeroDeApuesta) ||
      numeroDeApuesta <= 0 ||
      numeroDeApuesta > balance / lineas
    ) {
      console.log("Apuesta no valida, Ingrese un número válido por favor");
    } else {
      return numeroDeApuesta;
    }
  }
};

let balance = deposito();
const numeroDeLineas = obtenerNumeroDeLineas();
const apuesta = obtenerApuesta(balance, numeroDeLineas);
