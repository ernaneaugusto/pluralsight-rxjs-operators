const { of } = require("rxjs");
const { distinct } = require("rxjs/operators");

const OBS$ = of(1,2,3,4,2,1,5); // retorna valores como observables

OBS$
  .pipe(
    // distinct() // sempre retornara valores unicos como resposta, podendo ou nao receber uma condicao como parametro
    distinct( // caso receba uma condicao tomara como base essa condicao para analisar seus retornos
      val => val < 4
    ),
  )
  .subscribe(
    (data) => console.log("##", data),
    null,
    () => console.log("## completo"),
  );
