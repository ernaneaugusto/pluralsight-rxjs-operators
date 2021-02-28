const { timer } = require("rxjs");
const { skipUntil, take } = require("rxjs/operators");

// nao eh reavaliado depois de se tornar falso

timer(1, 1000) // timer
  .pipe(
    take(6), // executa 6x
    skipUntil( // recebe um segundo observable, so retorna valores quando o segundo observable retorna algum valor 
      timer(2000)
    )
  )
  .subscribe(
    (data) => console.log("##", data)
  );
