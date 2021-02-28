const { of } = require("rxjs");
const { map, catchError } = require("rxjs/operators");

of("a", 1) // retorna valores como observables
  .pipe(
    map((valor) => valor.toUpperCase()), // faça qualqeur tratamento aqui
    catchError(() => { // captura o erro
      return of("Erro tratado :/");
    }),
  )
  .subscribe(
    (data) => console.log("## data", data), // loga somente o "a" de sucesso
    (err) => console.log("## Fluxo de ERRO", err), // nao acontece pq tratamos com catchError
    () => console.log("## COMPLETO"), // sempre acontece
  );
