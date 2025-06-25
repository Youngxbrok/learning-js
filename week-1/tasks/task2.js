let option = 10;
let compara;

if (option >= 1 && option <= 10) {
  compara = "niño";
}
if (option >= 11 && option <= 20) {
  compara = "adolescente";
}
if (option >= 21 && option <= 60) {
  compara = "adulto";
}
if (option >= 61 && option <= 100) {
  compara = "anciano";
}

switch (compara) {
  case "niño":
    return console.log("Eres un niño");

  case "adolescente":
    return console.log("Eres un adolescente");

  case "adulto":
    return console.log("Eres un adulto");

  case "anciano":
    return console.log("Eres un anciano");

  default:
    return console.log("Tu edad es invalida o ya estas muerto");
}
