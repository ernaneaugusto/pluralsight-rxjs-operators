const { of } = require("rxjs");
const { take } = require("rxjs/operators");

of(1,2,3,4,5) // retorna valores como observables
  .pipe(
    take(3)
  )
  .subscribe(
    (data) => console.log("##", data)
  );
