// let num1 = 34;

const otheFunction = () => {
  let num1;
  console.log(typeof null);
  console.log(typeof undefined);
  const num2 = 3;

  let str = "ewe";

  let num = 2;

  let bool = false;
  let decimal = 2.39;

  /*
   *
   * */

  if (num1 === 3) {
    console.log(num1);
  }
};
//
// otheFunction();
//
// let option = "Green Garden";
// switch (option) {
//   case "Pure Strawberry Joy":
//     return console.log(0.5);
//     break;
//   case "Energizer":
//   case "Green Garden":
//     return console.log(1.5);
//     break;
// }

function function1(param) {
  return param;
}

const function2 = (param) => {
  return param;
};

const function3 = (function01, param) => {
  const functionO = function01(param);
  return functionO;
};

// console.log(function3(function1, "El weso"));

const people = [
  {
    name: "kulo",
    apellido: "teta",
  },
  {
    name: "ñema",
    apellido: "y no hay recreo",
  },
];

people.map(async (person) => {
  console.log(person);
});
