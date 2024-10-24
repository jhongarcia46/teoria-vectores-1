// como se inicializa un vector
let vector = []; //vacio 
// Vector con información 
let nombres = ["carlos", "juan", " pepe", " maria", " luis", "bryan", "michael", "cathe", "andres"];
console.log(nombres);
// imprimir o escribir todo el vector
console.log ("vector: " + nombres);
// imprimir un solo vector
console.log ("el nombre que está en la posicion 5 es: " + nombres[1]);
// recorrer un vector
for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

nombres.push("Stivem"); 

console.log(nombres);

nombres.splice(1,2);
console.log(nombres);
