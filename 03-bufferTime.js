const { pipe, of, interval } = require("rxjs");
const { bufferTime, take } = require("rxjs/operators");

interval(1000) // emite numeros sequenciais a cada 1seg
  .pipe(
    take(5), // limita execucao em 6x
    bufferTime(2000, 1000), // a cada 1seg emite os valores dos ultimos 2seg
  )
  .subscribe((data) => console.log("## data", data));