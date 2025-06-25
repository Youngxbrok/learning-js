// Tienes un array que representa los niveles desbloqueados por un jugador en un videojuego:
//
// El jugador ahora encuentra un "portal" que le hace repetir los niveles 1, 2 y 3 pero empezando desde el índice 3 (es decir, los vuelve a jugar).

// Declaración del array niveles
let niveles = ["nivel1", "nivel2", "nivel3", "nivel4", "nivel5", "nivel6"];

// Usando el metodo copyWithin para que el jugador repita los niveles 1, 2 y 3 otra vez
niveles.copyWithin(3, 0, 4);

// Presentando en pantalla el resultado de metodo en formato String y con una declaracion de especiado especifica
console.log(niveles.join(", "));
