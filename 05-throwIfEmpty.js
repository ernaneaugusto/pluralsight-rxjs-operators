const { of } = require("rxjs");
const { map, catchError, throwIfEmpty } = require("rxjs/operators");

of() // retorna valores como observables
  .pipe(throwIfEmpty()) // retorna um erro caso o retirno seja vazio
  .subscribe(
    (data) => console.log("## sucesso", data),
    (err) => console.log("## Fluxo de ERRO", err), // nao acontece quando vazio pq tratamos com throwIfEmpty
    () => console.log("## COMPLETO"), // sempre acontece
  );
