const { of } = require("rxjs");
const { skipLast } = require("rxjs/operators");

of(1,2,3) // retorna valores como observables
  .pipe(
    skipLast(2) // pula os 2 ultimo valores
  )
  .subscribe(
    (data) => console.log("##", data)
  );
