// 🧠 EJERCICIO: Verificador de Anagramas
// Objetivo: Escribir una función que determine si dos palabras son anagramas entre sí.

// 🔍 ¿Qué es un anagrama?
// Son palabras que tienen las mismas letras en diferente orden.
// Ejemplo: "roma" y "amor" son anagramas.

// 🧪 Casos de prueba esperados:
// isAnagrama("roma", "amor") → true
// isAnagrama("Roma", "Amor") → true (ignorar mayúsculas)
// isAnagrama("perro", "gato") → false

// 1️⃣ Paso 1: Normaliza las cadenas (minúsculas, sin espacios si quieres admitir frases).
// 💡 Usa toLowerCase()

// 2️⃣ Paso 2: Convierte cada string en array con split()
// 💡 split('')

// 3️⃣ Paso 3: Ordena ambos arrays con sort()

// 4️⃣ Paso 4: Vuelve a unirlos con join()

// 5️⃣ Paso 5: Compara si los resultados son iguales → retorna true o false

// 📦 Bonus: Ignora espacios y acentos si quieres hacerlo más avanzado.

// 💡 Reto adicional:
// - Crea una función que verifique si hay anagramas dentro de un array de palabras
// Ejemplo: ["roma", "amor", "carro", "ramo"] → [["roma", "amor", "ramo"], ["carro"]]

// function isAnagrama(palabra1, palabra2) {
//   // Escribe tu solución aquí paso a paso...
// }

const isAnagram = (str1, str2) => { 

    let frequency = {};

 if (typeof str1 !== "string" || typeof str2 !== "string") 
    throw new Error("Fockiu, tu no entiendee! Te pedimos un valor de tipo string!");
 
 if (str1.length !== str2.length) return false;

for (let counter of str1.toLowerCase()) {
    frequency[counter] = (frequency[counter] || 0) +1;
}

for (let counter of str2.toLowerCase()) {
    if (!frequency[counter]) {
        return false;
    } else {
        frequency[counter] -= 1
    }
}
 return true;


};

// Usa console.log para probar:
console.log(isAnagram("nap", "pan")) // true
console.log(isAnagram("mamI", "Mami")) //→ true (ignorar mayúsculas)
console.log(isAnagram("perro", "gato")) //→ false
