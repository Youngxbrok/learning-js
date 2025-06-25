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

// Usa console.log para probar:
// console.log(isAnagrama("roma", "amor")) // true
// isAnagrama("Roma", "Amor") → true (ignorar mayúsculas)
// isAnagrama("perro", "gato") → false
