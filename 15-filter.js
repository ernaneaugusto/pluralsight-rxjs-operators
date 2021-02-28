const { of } = require("rxjs");
const { filter } = require("rxjs/operators");

const OBS$ = of(1, 2, 3, 4, 2, 1, 5); // retorna valores como observables

OBS$.pipe(
  filter(
    // recebe uma condicao e retorna valores filtrados com base nela
    (val) => val < 4
  ),
).subscribe(
  (data) => console.log("##", data),
  null,
  () => console.log("## completo"),
);

