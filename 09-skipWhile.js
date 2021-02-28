const { of } = require("rxjs");
const { skipWhile } = require("rxjs/operators");

of(1,2,3,2,4,3) // retorna valores como observables
  .pipe(
    skipWhile( // recebe uma condicao e NAO executa enquando essa condicao for TRUE, assim que ser tornar FALSE, executa o restante dos valores e NAO reavalia cada valor para verificar se eh TRUE novamente
      val => val < 3
    )
  )
  .subscribe(
    (data) => console.log("##", data)
  );
