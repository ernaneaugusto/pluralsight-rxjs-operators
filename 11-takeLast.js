const { of } = require("rxjs");
const { takeLast } = require("rxjs/operators");

const OBS$ = of(1,2,3,4); // retorna valores como observables

OBS$.pipe(
      takeLast(3)
    )
    .subscribe(
      (data) => console.log("##", data)
    );

console.log("\nEx2");
// retorna ultimos x valores mesmo que a fonte emita menos do que esta definido em takeLast
OBS$
.pipe(
    takeLast(6)
  )
  .subscribe(
    (data) => console.log("##", data)
  );