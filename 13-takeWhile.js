const { of } = require("rxjs");
const { takeWhile } = require("rxjs/operators");

const OBS$ = of(1,2,3,4,2,1,5); // retorna valores como observables

OBS$
  .pipe(
    takeWhile( // recebe uma condicao e fornece valores ate que essa seja TRUE, apos ser FALSE uma vez os outros resultado sao completamente ignorados e o fluxo termina
      val => val < 4
    ),
  )
  .subscribe(
    (data) => console.log("##", data),
    null,
    () => console.log("## completo"),
  );
