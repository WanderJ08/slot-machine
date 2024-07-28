const prompt = require("prompt-sync")();

const FILAS = 3;
const COLUMNAS = 3;

const CONTADOR_SIMBOLOS = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const VALORES_SIMBOLOS = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

const ruleta = () => {
  const simbolos = [];
  for (const [simbolo, contador] of Object.entries(CONTADOR_SIMBOLOS)) {
    for (let i = 0; i < contador; i++) {
      simbolos.push(simbolo);
    }
    console.log(simbolos);
  }

  const carrete = [[], [], []];
  for (let i = 0; i < COLUMNAS; i++) {
    const carreteSimbolos = [...simbolos];
    for (let j = 0; j < FILAS; j++) {
      const randomIndex = Math.floor(Math.random() * carreteSimbolos.length);
      const simboloSeleccionado = carreteSimbolos[randomIndex];
      carrete[i].push(simboloSeleccionado);
      carreteSimbolos.splice(randomIndex, 1);
    }
  }

  return carrete;
};

ruleta();
let balance = deposito();
const numeroDeLineas = obtenerNumeroDeLineas();
const apuesta = obtenerApuesta(balance, numeroDeLineas);
