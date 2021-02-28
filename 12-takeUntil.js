const { timer } = require("rxjs");
const { takeUntil } = require("rxjs/operators");

// const OBS$ = of(1,2,3,4); // retorna valores como observables

timer(0, 100)
  .pipe(
    takeUntil(
      // recebe um obs$ como parametro e realiza sua acao ate que esse obs$ de parametro retorne uma resposta
      timer(1000),
    ),
  )
  .subscribe(
    (data) => console.log("##", data),
    null,
    () => console.log("## completo"),
  );
