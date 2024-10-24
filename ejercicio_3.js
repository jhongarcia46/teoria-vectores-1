// escribe un programa que recorra un vector de animales y que muestren 
// los que tengas mas de 5 letras en su nombre
let animales = ["leon", "tortuga", "perro", "gato", "aguila"];
// recorrer el vector 
for(let i = 0; i < animales.length; i++) {
// validar que el animal tenga + de 5 letras
if(animales[i].length > 5) {
console.log(animales[i]);
}
}