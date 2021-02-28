const { of } = require("rxjs");
const { skip } = require("rxjs/operators");

of(1,2,3) // retorna valores como observables
  .pipe(
    skip(2) // pula 2 valores
  )
  .subscribe(
    (data) => console.log("##", data)
  );
