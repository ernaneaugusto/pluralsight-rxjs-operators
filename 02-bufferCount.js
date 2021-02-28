const { pipe, of } = require("rxjs");
const { bufferCount } = require("rxjs/operators");

of(1,2,3,4,5,6,7,8,9) // emite numeros sequenciais a cada 1seg
  .pipe(
    bufferCount(3,2), // armazena os numeros emitidos em um array a cada 3seg
  )
  .subscribe((data) => console.log("## data", data));