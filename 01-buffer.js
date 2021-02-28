const { interval, pipe } = require("rxjs");
const { buffer, take } = require("rxjs/operators");

interval(1000) // emite numeros sequenciais a cada 1seg
  .pipe(
    buffer(interval(3000)), // armazena os numeros emitidos em um array a cada 3seg
    take(3) // limita numero de execucoes
  )
  .subscribe((data) => console.log("## data", data));